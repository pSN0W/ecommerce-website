import React from "react";

import "./menu-item.scss";

const MenuItem = ({ title, sized, imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className={`${sized} menu-item`}>
      <div
        className="background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
