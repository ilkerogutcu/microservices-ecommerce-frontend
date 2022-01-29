import React from "react";
import "./top-categories-item.css";

interface TopCategoriesItemProps {
  item: any;
  customClassName?: string;
}
function TopCategoriesItem({ item, customClassName }: TopCategoriesItemProps) {
  return (
    <div className="top-categories-item">
      <img
        src={item.img}
        className="top-categories-item__img"
        alt={item.title}
      />
      <div className="top-categories-item-info">
        <h1 className="top-categories-item-info__title">{item.title}</h1>
        <button className="top-categories-item-info__button">
          ALIŞVERİŞE BAŞLA
        </button>
      </div>
    </div>
  );
}

export default TopCategoriesItem;
