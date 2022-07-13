import React from 'react'

function Navbar() {
  return (
      <header className='flex justify-between align-middle  p-5 bg-blue-500'>
          <div className="logo">
              logo
          </div>
          <div className="search">
                input
              {/* search icon */}

          </div>
          <div className="cart">
              cart
          </div>
    </header>
  )
}

export default Navbar