import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId}=useParams()
  const resInfo=useRestaurantMenu(resId);
  // Check if resInfo is available before trying to access its properties
  if (!resInfo) {
    return <Shimmer />;
  }

  // Destructure data safely after the check
  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};
const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards)
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>
   <ul>
    {itemCards.map(item=>(<li key={item.card.info.id}>{item.card.info.name}-{"Rs. "}
     {item.card.info.price/100 || item.card.info.defaultPrice/100}
    </li>))}
   </ul>
    </div>
  );
};

export default RestaurantMenu;
