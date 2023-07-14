import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import rigoImageUrl from '../../img/rigo-baby.jpg'
import '../../styles/index.css'
import Search from '../component/Search.jsx'

export const Home = () => {
  const { store, actions } = useContext(Context)

  return (
    <div>
      <Search />
      <h1>Home</h1>
    </div>
  )
}
