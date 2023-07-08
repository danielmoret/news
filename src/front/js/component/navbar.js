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
    </nav>
  )
}
