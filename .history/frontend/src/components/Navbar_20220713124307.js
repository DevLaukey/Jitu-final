import React from 'react'

function Navbar() {
  return (
      <header className='flex justify-between align-middle  m-5'>
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