import React, { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative sm:hidden">
      <button
        className="block text-gray-500 hover:text-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Deportes
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Tecnología
            </li>
            {/* Agrega más opciones según tus necesidades */}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Menu
