import { RES_LOGO_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData.info;

  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={RES_LOGO_URL} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
