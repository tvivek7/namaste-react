import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";
const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItems());
  };

  if (cartData.length === 0) {
    return (
      <div className="text-center m-10 p-10">
        <h4>Cart is Empty</h4>
      </div>
    );
  }

  return (
    <div className="text-center m-10 p-10">
      <h4>Cart</h4>
      <button
        onClick={() => clearCart()}
        className="bg-black text-white border-r-8 m-2 p-2 rounded-md"
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartData} />
      </div>
    </div>
  );
};

export default Cart;
