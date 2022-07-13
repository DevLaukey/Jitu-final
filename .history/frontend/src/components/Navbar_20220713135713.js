import React from "react";
import logo from "./logo.jpg";
import { BsCart2, BsPersonCircle, BsSearch } from "react-icons/bs";
function Navbar() {
  return (
    <header className="flex space-x-4 items-center justify-between align-middle  p-4 bg-blue-400">
      <div className="text-center ">
        <img className="aspect-square w-14" src={logo} alt="" />
      </div>
      <div class="flex items-center justify-center">
        <div class="input-group flex  items-stretch w-full  rounded">
          <input
            type="search"
            class="form-control  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal   bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out m-0 focus:text-white focus:bg-white focus:border-blue-600 focus:outline-none opacity-25"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            class="input-group-text flex items-center px-2 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
            id="basic-addon2"
          >
            <BsSearch />
          </span>
        </div>
      </div>
      <div>
        <ul className="hidden py-1.5 md:flex space-x-3 text-center">
          <li>csdc</li>
          <li>csdc</li>
          <li>csdc</li>
        </ul>
      </div>
      <div class="space-x-4 text-gray-700 flex  px-3 py-2.5  text-center whitespace-nowrap rounded">
        <BsCart2 />
        <BsPersonCircle />
      </div>
    </header>
  );
}

export default Navbar;
