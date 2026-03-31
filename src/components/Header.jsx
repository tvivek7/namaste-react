import { HEADER_IMG_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnText, setBtntext] = useState(false);

  // subscribing to store and getting data from store
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartItems", cartItems);

  const onlineStatus = useOnlineStatus();
  const contextData = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo">
        <img alt="img" className="w-56" src={HEADER_IMG_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4 ">
          <li className="px-4">
            <h3>{onlineStatus ? "Online" : "Offline"}</h3>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <button onClick={() => setBtntext((prev) => !prev)} className="px-4">
            {btnText ? "Logout" : "Login"}
          </button>
          <li className="px-4">{contextData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
