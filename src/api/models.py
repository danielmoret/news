from flask_sqlalchemy import SQLAlchemy
from enum import Enum
from sqlalchemy import Text

db = SQLAlchemy()

class Category(Enum):
    business = "business"
    entertainment = "entertainment"
    general = "general"
    health = "health"
    science = "science"
    sports = "sports"
    technology = "technology"

class News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    content= db.Column(db.Text, nullable=False)
    author = db.Column(db.String(120), nullable=False)
    category = db.Column(db.Enum(Category), nullable=False)
    image = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<News {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "author": self.author,
            "category": self.category.value,
            "image": self.image
            # do not serialize the password, its a security breach
        }