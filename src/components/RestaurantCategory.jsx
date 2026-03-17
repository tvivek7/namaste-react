import React from "react";

const RestaurantCategory = ({ data }) => {
  console.log(data.title);

  return (
    <div className="w-full bg-gray-300 shadow-lg p-4">
      <span>{data.title}</span>
    </div>
  );
};
export default RestaurantCategory;
