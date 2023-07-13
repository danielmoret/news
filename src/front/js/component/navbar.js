import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="border-b-2 border-b-black">
      <div className="flex justify-center py-8 divide-x">
        <Link to="/" className="font-newyorkfont text-5xl">
          The Daniel Times
        </Link>
      </div>
      <div class="flex justify-around font-semibold text-gray-400 ">
        <button id="buss" class="tab-btn active hover:text-neutral-800">
          BUSSINES
        </button>
        <button id="actualidad" class="tab-btn hover:text-neutral-800">
          ENTERTEINMENT
        </button>
        <button id="salud" class="tab-btn hover:text-neutral-800">
          GENERAL
        </button>
        <button id="economia" class="tab-btn hover:text-neutral-800">
          HEALTH
        </button>
        <button id="economia" class="tab-btn hover:text-neutral-800">
          SCIENCE
        </button>
        <button id="economia" class="tab-btn hover:text-neutral-800">
          SPORTS
        </button>
        <button id="economia" class="tab-btn hover:text-neutral-800">
          TECHNOLOGY
        </button>
      </div>
    </nav>
  )
}
