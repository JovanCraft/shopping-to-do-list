import React from "react";

import Item from "./Item";

const GroceryList = props => {
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GroceryList;
