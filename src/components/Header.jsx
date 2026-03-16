import { HEADER_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
export const Header = () => {
  const [btnText, setBtntext] = useState(false);

  const onlineStatus = useOnlineStatus();
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
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button onClick={() => setBtntext((prev) => !prev)} className="px-4">
            {btnText ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
