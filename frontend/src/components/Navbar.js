import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import { BsCart2, BsPersonCircle, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const isAdmin = true;
  return (
    <header className="flex sticky z-50 top-0 left-0 right-0 space-x-4 items-center justify-between align-middle w-full  p-4 bg-blue-400">
      <div className="text-center ">
        <Link to="/">
          <img className="aspect-square w-14" src={logo} alt="" />
        </Link>
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
        {isAdmin ? (
          <ul className="hidden text-gray-200 py-1.5 md:flex space-x-3 text-center">
            <Link to="/add-product">Add Product</Link>
            <Link to="/add-category">Add Category</Link>
          </ul>
        ) : (
          <ul className="hidden text-gray-200 py-1.5 md:flex space-x-3 text-center">
            <li>csdc</li>
            <li>csdc</li>
            <li>csdc</li>
          </ul>
        )}
      </div>
      <div className="space-x-4 text-gray-200 flex  px-3 py-2.5  text-center whitespace-nowrap rounded">
        <BsCart2 />
        <div class="dropdown flex relative">
          <BsPersonCircle />
          <svg
            class="fill-current h-4 w-4 focus:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => setToggle(!toggle)}
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </div>
        <ul
          className={
            toggle ? "  text-gray-700 right-0 mr-3 mt-12 fixed " : "hidden"
          }
        >
          <li classNames="">
            <Link
              to="/Login"
              className="rounded-t  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >
              Log in
            </Link>
          </li>
          <li className="">
            <Link
              to="/signup"
              className=" text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >
              Register
            </Link>
          </li>
          <li className="">
            <p className="rounded-b  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              Upload a profile Photo
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
