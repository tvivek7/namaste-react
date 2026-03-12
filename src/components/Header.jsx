import { HEADER_IMG_URL } from "../utils/constants";

export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
