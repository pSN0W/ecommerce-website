import React from "react";

import "./menu-component.scss";

const MenuComponent = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
  </div>
);

export default MenuComponent;
