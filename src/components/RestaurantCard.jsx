import { RES_LOGO_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData.info;

  return (
    <div className="m-4 p-4 w-[270] rounded-lg bg-orange-100 hover:bg-orange-300">
      <img
        alt="res-logo"
        className="res-logo rounded-lg h-[280]"
        src={RES_LOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="cuisines">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
