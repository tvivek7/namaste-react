import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const VegRestaurantCard = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    setListOfRestaurants(
      json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (!onlineStatus) return <h1>No Internet Connection</h1>;

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex m-4 p-4">
        <div>
          <input
            type="search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 m-4 bg-orange-300 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 m-4 bg-orange-300 rounded-lg"
            onClick={() => {
              const filteredItems = listOfRestaurants.filter(
                (item) => item.info.avgRating > 4.4,
              );
              setListOfRestaurants(filteredItems);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap shadow-lg">
        {filteredRestaurants?.map((item) => (
          <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
            {item.info.veg ? (
              <VegRestaurantCard resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
