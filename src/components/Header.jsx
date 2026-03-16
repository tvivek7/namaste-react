import { HEADER_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
export const Header = () => {
  const [btnText, setBtntext] = useState(false);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img alt="img" className="img" src={HEADER_IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <h3>{onlineStatus ? "Online" : "Offline"}</h3>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
