import { useState, useEffect } from "react";
import { RES_MENU_LOGO } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${RES_MENU_LOGO}${resId}`);
    const res = await data.json();
    setResInfo(res.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
