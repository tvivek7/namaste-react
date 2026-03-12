import { HEADER_IMG_URL } from "../utils/constants";
import { useState } from "react";
export const Header = () => {
  const [btnText, setBtntext] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img alt="img" className="img" src={HEADER_IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={() => setBtntext((prev) => !prev)}>
            {btnText ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
