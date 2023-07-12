"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, News, Category
from api.utils import generate_sitemap, APIException
from sqlalchemy import and_, or_

api = Blueprint('api', __name__)


@api.route('/news', methods=['POST'])
def handle_news():
    
        body = request.json
       
        if "title" not in body:
            raise APIException('You need to specify the title', status_code=400)
        if "content" not in body:
            raise APIException('You need to specify the content', status_code=400)
        if "author" not in body:
            raise APIException('You need to specify the author', status_code=400)
        if "category" not in body:
            raise APIException('You need to specify the category', status_code=400)
        else:
            if body["category"] not in Category.__members__:
                raise APIException('Category not valid', status_code=400)     
        if "image" not in body:
            raise APIException('You need to specify the image', status_code=400)
        
        news = News(title=body["title"], content=body["content"], author=body["author"], category=body["category"], image=body["image"])
        try:
            db.session.add(news)
            db.session.commit() 
            return jsonify(news.serialize()), 200
        except Exception as error:
            db.session.rollback()
            return jsonify({"msg": f"{error}"}), 500

@api.route('/news', methods=['GET'])
def get_news():
    queryCategory =  request.args.get("category")
    queryTitle = f'%{request.args.get("title","")}%'
    queryContent = f'%{request.args.get("content","")}%'

    query = News.query.filter(News.title.ilike(queryTitle),
        News.content.like(queryContent)
        
    )

    if queryCategory:
        if queryCategory not in Category.__members__:
            raise APIException('Category not valid', status_code=400)
        else:    
            query = query.filter(News.category == queryCategory)

    news_filter = query.all()
    

    all_news = list(map(lambda news: news.serialize(), news_filter))
    return jsonify(all_news), 200