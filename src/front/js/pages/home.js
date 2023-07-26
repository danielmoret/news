import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import rigoImageUrl from '../../img/rigo-baby.jpg'
import '../../styles/index.css'
import Cards from '../component/cards'

export const Home = () => {
  const { store, actions } = useContext(Context)

  return (
    <div className="mt-5">
      <div className="flex justify-center flex-wrap gap-2">
        {store.news.map((item) => {
          return <Cards key={item.id} news={item} />
        })}
      </div>
    </div>
  )
}
