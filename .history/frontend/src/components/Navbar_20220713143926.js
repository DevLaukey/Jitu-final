import React from "react";
import logo from "./logo.jpg";
import { BsCart2, BsPersonCircle, BsSearch } from "react-icons/bs";
function Navbar() {
  return (
    <header classNameName="flex space-x-4 items-center justify-between align-middle  p-4 bg-blue-400">
      <div classNameName="text-center ">
        <img classNameName="aspect-square w-14" src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <div className="input-group flex  items-stretch w-full  rounded">
          <input
            type="search"
            className="form-control  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal   bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out m-0 focus:text-white-900 focus:bg-white focus:border-blue-600 focus:outline-none opacity-25"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text flex items-center px-2 py-1.5 text-base font-normal text-gray-200 text-center whitespace-nowrap rounded"
            id="basic-addon2"
          >
            <BsSearch />
          </span>
        </div>
      </div>
      <div>
        <ul classNameName="hidden text-gray-200 py-1.5 md:flex space-x-3 text-center">
          <li>csdc</li>
          <li>csdc</li>
          <li>csdc</li>
        </ul>
      </div>
      <div className="space-x-4 text-gray-200 flex  px-3 py-2.5  text-center whitespace-nowrap rounded">
        <BsCart2 />
        <BsPersonCircle />
      </div>
    </header>
  );
}

export default Navbar;
