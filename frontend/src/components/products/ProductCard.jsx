import React from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import {
  BsCartPlus,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import StarRating from "./starRating";
import { useDispatch } from "react-redux";
import { toogleState } from "../../redux/slices/ProductReducer";
import Modal from "./Modal";
import { decrement, increment } from "../../redux/slices/cartReducer";
const ProductCard = () => {
  const dispatch = useDispatch();
  const [cartAdded, setCartAdded] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const addToCart = () => {
    setCartAdded(true);
  };
  const addOrder = () => {
    addToCart();
  };
  return (
    <>
      <Modal />
      <div className="bg-white rounded-md px-4 py-2.5 my-2 mx-1 md:m-3 shadow-md shadow-zinc-400 flex flex-col justify-center items-center hover:shadow hover:shadow-blue-500">
        <div className="flex items-center self-end gap-x-3 z-40 mr-4">
          <span className="bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-600">
            <FiEye
              className="hover:cursor-pointer"
              onClick={() => dispatch(toogleState())}
            />
          </span>
          <span className="bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-600">
            <FiHeart />
          </span>
        </div>
        <div className="w-full mt-[-20px] z-30">
          <img
            src="https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="brown and black rolling chair"
            className="w-max h-[180px] rounded"
          />
        </div>
        <p className="text-zinc-900 mt-1.5 font-semibold capitalize">
          brown and black rolling chair
        </p>
        <div>
          <p className="text-zinc-500 text-sm my-0.5 line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            expedita tempora libero nam? Placeat ipsam doloremque vitae ullam,
            ratione debitis totam aperiam beatae mollitia sapiente, ducimus
            praesentium. Quisquam, non iste?
          </p>
        </div>
        <div className="flex justify-between lg:flex-row lg:justify-between lg:items-center w-full mt-3">
          <span>
            <StarRating />
          </span>
          <span>
            <p className="text-zinc-800 ">In stock</p>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full mt-3">
          <span className="flex items-center self-start gap-x-2">
            <p className="text-2xl font-semibold">$37.00</p>
            <p className="bg-zinc-200 px-1.5 rounded-sm  text-zinc-600">-25%</p>
          </span>
          <span>
            <p className="line-through text-zinc-400 p-1.5 self-start">$52.5</p>
          </span>
        </div>
        {cartAdded ? (
          <div className="w-full mt-3 items-center flex -space-x-4 justify-evenly text-2xl">
            <BsFillArrowLeftCircleFill
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                  dispatch(decrement());
                } else {
                  setCartAdded(false);
                }
              }}
            />
            {count}
            <BsFillArrowRightCircleFill
              onClick={() => {
                setCount(count + 1);
                dispatch(increment());
              }}
            />
          </div>
        ) : (
          <button
            type="submit"
            onClick={addOrder}
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
  );
};

export default ProductCard;
