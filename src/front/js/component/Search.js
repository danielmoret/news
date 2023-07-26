import React, { useState } from 'react'

function Search() {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <>
      <div className="flex px-3 w-full">
        <svg
          className="svg-icon search-icon"
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
          width="25"
          height="25"
          onClick={() => setShowSearch(!showSearch)}
        >
          <g className="search-path" fill="none" stroke="black" strokeWidth="2">
            <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
        <div className="ml-2 w-full md:w-1/3">
          <input
            placeholder="search "
            className={`miInput focus:outline-none  ${
              showSearch ? 'animationInicio' : 'animationFinal'
            }`}
          />
        </div>
      </div>
    </>
  )
}

export default Search
