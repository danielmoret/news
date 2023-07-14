import React from 'react'

function Search() {
  return (
    <div class="flex">
      <svg
        class="svg-icon search-icon"
        aria-labelledby="title desc"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.9 19.7"
        width="25"
        height="25"
      >
        <g class="search-path" fill="none" stroke="black" strokeWidth="2">
          <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
          <circle cx="8" cy="8" r="7" />
        </g>
      </svg>
    </div>
  )
}

export default Search
