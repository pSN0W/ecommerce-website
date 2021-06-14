import React from "react";

import "./preview-component.scss";

import MenuComponent from "../menu-component/menu-component";

const PreviewComponent = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title}</h2>
    <div className="preview">
      {items
        .filter(({ id }) => id < 5)
        .map(({ id, ...otherItems }) => (
          <MenuComponent key={id} {...otherItems} />
        ))}
    </div>
  </div>
);

export default PreviewComponent;
