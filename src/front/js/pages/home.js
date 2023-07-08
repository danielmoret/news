import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import rigoImageUrl from '../../img/rigo-baby.jpg'
import '../../styles/index.css'

export const Home = () => {
  const { store, actions } = useContext(Context)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
