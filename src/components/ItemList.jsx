import React from "react";
import { RES_LOGO_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(
    "items",
    items.map((item) => item.card.info),
  );

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="m-2">{item.card.info.name}</div>
            <div>
              ₹ {(item.card.info.defaultPrice || item.card.info.price) / 100}
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="flex flex-col align-center">
            <img
              className="w-28"
              src={RES_LOGO_URL + item.card.info.imageId}
              alt="img"
            />
            <button
              className="px-4 py-2 rounded-xl text-orange-300 font-semibold 
border border-orange-300 
hover:bg-orange-300 hover:text-white 
hover:shadow-[0_0_20px_#3b82f6] 
transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
