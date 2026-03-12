import { RestaurantCard } from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredItems = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4.5,
            );
            setListOfRestaurants(filteredItems);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
