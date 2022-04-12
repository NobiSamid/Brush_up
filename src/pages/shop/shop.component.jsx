import { Grid } from "@mui/material";
import React, { Component } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import Shop_data from "./shop.data";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Shop_data
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id}{...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Shop;
