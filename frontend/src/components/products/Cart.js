import React from "react";
import CurrencyFormat from "react-currency-format";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

function Cart() {
  let itemsCount = useSelector((state) => state.cart.count);
  const totalPrice = 4040;
  return (
    <div class="container mx-auto ">
      <div class="md:flex shadow-md my-2">
        <div class=" md:w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">{itemsCount} Items</h2>
          </div>
          <div class="flex mt-10 mb-5 justify-between space-x-3 w-full">
            <h3 class="font-semibold text-gray-600 text-xs uppercase md:w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center">
              Total
            </h3>
          </div>
          <CartProduct /> <CartProduct />
          <Link
            to="/"
            class="flex w-60 font-semibold items-center text-indigo-600 text-sm mt-10"
          >
            <BsArrowLeft class="text-bold" />
            Continue Shopping
          </Link>
        </div>

        <div id="summary" class="md:w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Number of Items</span>
            <span class="font-semibold text-sm">{itemsCount}</span>
          </div>

          <div class="  mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>
                <CurrencyFormat
                  value={totalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Ksh"}
                />
              </span>
            </div>
            <button class="bg-blue-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
