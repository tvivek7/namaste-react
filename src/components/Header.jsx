import { HEADER_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btnText, setBtntext] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img alt="img" className="img" src={HEADER_IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={() => setBtntext((prev) => !prev)}>
            {btnText ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
