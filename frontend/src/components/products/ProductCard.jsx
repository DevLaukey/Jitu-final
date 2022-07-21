import React, { useEffect } from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import {
  BsCartPlus,
  BsFillFilePlusFill,
  BsFillFileMinusFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import {
  decrement,
  increment,
  addBookmark,
  removeBookmark,
} from "../../redux/slices/cartReducer";
import CurrencyFormat from "react-currency-format";
import axios from "axios";

const ProductCard = () => {
  const dispatch = useDispatch();
  const [cartAdded, setCartAdded] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [bookmark, setBookmark] = React.useState(false);

  const [products, setProducts] = React.useState([]);

  const bookmarkCount = 10;
  // React.useState(useSelector((state) => state.cart.bookmarkCount));

  const price = 3900;
  const removeItems = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(decrement());
    } else {
      setCartAdded(false);
    }
  };
  const addItems = () => {
    setCartAdded(true);

    setCount(count + 1);
    dispatch(increment());
  };

  const baseURL = "http://localhost:3005";


  useEffect(() => {
    setProducts([]);
    // let rows, total = 0;
    axios.get(`${baseURL}/products`).then((response) => {
      setProducts(response.data.products)
      // total = response.data.filtered;
      // rows = response.data.records.length;
    });
  }, []);

  return (
    <>
      {products ? products.map((product) => (
        <>
          <Modal />
          <div className="bg-white rounded-md px-4 py-2.5 my-2 mx-1 md:m-3 shadow-md shadow-zinc-400 flex flex-col justify-center items-center hover:shadow hover:shadow-blue-500">
            <div className="flex items-center self-end gap-x-3 z-40 mr-4">
              <span className="bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-600">
                <FiEye
                  className="hover:cursor-pointer"
                // onClick={() => dispatch(toogleState())}
                />
              </span>
              <span
                className={
                  bookmark
                    ? `bg-indigo-900 text-white p-1.5 rounded-md hover:bg-blue-600`
                    : `bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-600`
                }
              >
                <FiHeart
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setBookmark(!bookmark);
                    if (bookmark === true) {
                      dispatch(removeBookmark());
                    } else {
                      dispatch(addBookmark());
                    }
                  }}
                />
              </span>
            </div>
            <div className="w-full mt-[-20px] z-30">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-max h-[180px] rounded"
              />
            </div>
            <div className="justify-between  flex-wrap">
              <p className="text-zinc-900 mt-1.5 font-semibold capitalize">
                {product.productName}
              </p>
              {product.inStock ? (
                <p className="text-sm text-green-600 mt-1">
                  In Stock
                </p>) : (<p className="text-sm text-red-600 mt-1">Out of stock</p>)}

            </div>

            <div>
              <p className="text-zinc-500 text-sm my-0.5 line-clamp-2">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full mt-3">
              <span className="flex items-center self-start gap-x-2">
                <p className="text-xl font-semibold">
                  <CurrencyFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Ksh"}
                  />
                </p>
                <p className="bg-zinc-200 px-1.5 rounded-sm  text-zinc-600">-25%</p>
              </span>
              <span>
                <p className="line-through text-zinc-400 p-1.5 self-start">
                  <CurrencyFormat
                    value={price + Math.floor(Math.random() * 100)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Ksh"}
                  />
                </p>
              </span>
            </div>
            {cartAdded ? (
              <div className="w-full mt-3 items-center flex justify-between bg-blue-600 text-white rounded-md font-light py-0.5 px-3 text-2xl">
                <BsFillFileMinusFill
                  className="cursor-pointer hover:scale-x-150"
                  onClick={removeItems}
                />
                {count}
                <BsFillFilePlusFill
                  className="cursor-pointer hover:scale-x-150"
                  onClick={addItems}
                />
              </div>
            ) : (
              <button
                type="submit"
                onClick={addItems}
                className="bg-blue-600 text-white capitalize w-full flex items-center justify-center gap-x-2 p-2 my-2 rounded-md hover:bg-blue-800 "
              >
                <span>
                  <BsCartPlus />
                </span>
                <p>Add to Cart</p>
              </button>
            )}
          </div>
        </>
      )) : ""}
    </>
  );
};

export default ProductCard;
