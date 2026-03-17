import React from "react";

const ItemList = ({ items }) => {
  console.log(
    "items",
    items.map((item) => item.card.info.description),
  );

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2"
        >
          <div>{item.card.info.name}</div>
          <div>{item.card.info.price}</div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
