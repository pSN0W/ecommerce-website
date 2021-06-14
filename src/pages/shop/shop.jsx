import React from "react";

import SHOP_DATA from "./shop-list";
import PreviewComponent from "../../component/preview-component/preview-component";

import "./shop.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        {collection.map(({ id, ...otherSectionProps }) => (
          <PreviewComponent key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
