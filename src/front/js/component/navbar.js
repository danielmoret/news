import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Menu from './menu'

export const Navbar = () => {
  return (
    <nav className="border-b-2 border-b-black">
      <div className="flex pt-4 ml-1">
        <Menu />
        <Search />
      </div>

      <div className="flex justify-center py-8 divide-x">
        <Link to="/" className="font-newyorkfont text-5xl">
          The Daniel Times
        </Link>
      </div>
      <div className="sm:flex sm:justify-around sm:font-semibold sm:text-gray-400 hidden">
        <button id="buss" className="tab-btn active hover:text-neutral-800">
          BUSSINES
        </button>
        <button id="actualidad" className="tab-btn hover:text-neutral-800">
          ENTERTEINMENT
        </button>
        <button id="salud" className="tab-btn hover:text-neutral-800">
          GENERAL
        </button>
        <button id="economia" className="tab-btn hover:text-neutral-800">
          HEALTH
        </button>
        <button id="economia" className="tab-btn hover:text-neutral-800">
          SCIENCE
        </button>
        <button id="economia" className="tab-btn hover:text-neutral-800">
          SPORTS
        </button>
        <button id="economia" className="tab-btn hover:text-neutral-800">
          TECHNOLOGY
        </button>
      </div>
    </nav>
  )
}
