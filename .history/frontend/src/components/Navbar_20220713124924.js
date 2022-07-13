import React from 'react'
import logo from "./free-logo-24a54uqo7g-d1y96agntq.jpg";
function Navbar() {
  return (
      <header className='flex justify-between align-middle  p-5 bg-blue-400'>
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