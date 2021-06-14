import React from "react";

import "./preview-component.scss";

const PreviewComponent = ({ title, items }) => (
  <div>
    <h2>{title}</h2>
    {items
      .filter(({ id }) => id < 5)
      .map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
  </div>
);

export default PreviewComponent;
