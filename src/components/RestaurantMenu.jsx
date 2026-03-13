import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      " https://namastedev.com/api/v1/listRestaurantMenu/123456",
    );
    console.log(data);

    const res = await data.json();
    console.log(res);
  };

  return (
    <div className="menu">
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Burgers</li>
        <li>Burgers</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
