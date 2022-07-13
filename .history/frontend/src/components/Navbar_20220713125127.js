import React from 'react'
import logo from "./free-logo-24a54uqo7g-d1y96agntq-removebg-preview.png";
function Navbar() {
  return (
      <header className='flex justify-between align-middle  p-5 bg-blue-400'>
          <div className="w-20">
              <img src={logo} alt="" srcset="" />
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