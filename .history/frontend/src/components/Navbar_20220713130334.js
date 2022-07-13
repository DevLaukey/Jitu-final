import React from "react";
import logo from "./free-logo-24a54uqo7g-d1y96agntq-removebg-preview.png";
import { BsCart, BsSearch } from "react-icons/bs";
function Navbar() {
  return (
    <header className="flex justify-between align-middle  p-5 bg-blue-400">
      <div className="">
        <img
          onClick={() => {
            console.log("clicked");
          }}
          className="h-15 w-14"
          src={logo}
          alt=""
          srcset=""
        />
      </div>
      <div class="flex justify-center">
        <div class="xl:w-96">
          <div class="input-group relative flex  items-stretch w-full mb-4 rounded">
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <BsSearch />
            </span>
          </div>
        </div>
      </div>
          <div className="flex justify-center">
              <BsCart />
      </div>
    </header>
  );
}

export default Navbar;
