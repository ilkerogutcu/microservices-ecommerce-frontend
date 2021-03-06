import React from "react";
import TopCategoriesItem from "./top-categories-item/TopCategoriesItem";
import "./top-categories.css";

const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "T-SHIRT",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "AYAKKABILAR",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "KOT CEKETLER",
  },
];

function TopCategories() {
  return (
    <div className="top-categories">
      {categories.map((category) => (
        <TopCategoriesItem item={category} key={category.id} />
      ))}
    </div>
  );
}

export default TopCategories;
