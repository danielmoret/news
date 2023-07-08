import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import rigoImageUrl from '../../img/rigo-baby.jpg'
import '../../styles/index.css'

export const Home = () => {
  const { store, actions } = useContext(Context)

  return (
    <div className="bg-red">
      <h1>Hello Rigo!!</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          'Loading message from the backend (make sure your python backend is running)...'}
      </div>
      <p className="text-orange-600">
        This boilerplate comes with lots of documentation:{' '}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  )
}
