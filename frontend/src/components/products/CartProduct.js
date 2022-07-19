import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartProduct() {
    const [count, setCount] = useState(1);
    const singlePrice = 1990;
  return (
    count > 0 && (
      <div class="flex items-center  hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="md:flex w-2/5">
          <div class="w-full">
            <img
              class="h-24"
              src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between ml-4 md:-ml-4 flex-grow">
            <span class="font-bold text-sm">Iphone 6S</span>
            <span class="text-red-500 text-xs">Apple</span>
            <p
              onClick={() => {
                setCount(0);
              }}
              class="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </p>
          </div>
        </div>
        <div class="md:flex items-center md:space-x-4 justify-center  w-1/5">
          <AiOutlineMinus
            onClick={() => {
              setCount(count - 1);
            }}
          />
          <p className="md:py-6 py-5">{count}</p>
          <AiOutlinePlus
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
        <span class="text-center text-xs w-1/5 font-semibold md:text-sm">
          <CurrencyFormat
            value={singlePrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Ksh"}
          />
        </span>
        <span class="text-center text-xs w-1/5 font-semibold md:text-sm">
          <CurrencyFormat
            value={singlePrice *count}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Ksh"}
          />
        </span>
      </div>
    )
  );
}

export default CartProduct;
