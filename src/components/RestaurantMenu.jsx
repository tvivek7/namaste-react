import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_LOGO_URL, RES_MENU_LOGO } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

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
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {/* categories accordion */}
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.id}
          data={category.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
