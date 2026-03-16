import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_LOGO_URL, RES_MENU_LOGO } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [expandId, setExpandId] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  useEffect(() => {
    if (expandId === null) return;

    setShowDescription((prev) => !prev);
  }, [expandId]);

  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2].card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[4];

  console.log("categories", categories);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img
        alt="res-logo"
        className="res-logo"
        src={RES_LOGO_URL + cloudinaryImageId}
      />
      <h2>
        {cuisines} - {costForTwoMessage}
      </h2>
      <h2>Menu</h2>

      {/* <h2>{avgRating}</h2> */}
      <ul>
        {itemCards.map((item) => (
          <button
            onClick={() => setExpandId(item?.card?.info?.id)}
            key={item?.card?.info?.id}
            className="card"
          >
            <li>
              {item?.card?.info?.name} {"- ₹"}
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </li>
            {showDescription && expandId === item?.card?.info?.id && (
              <h4>{item?.card?.info?.description}</h4>
            )}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
