import { Grid } from "@mui/material";
import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://picsum.photos/200/300",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "Jacket",
          imageUrl: "https://picsum.photos/200/300",
          id: 2,
          linkUrl: 'jacket'
        },
        {
          title: "Sunglass",
          imageUrl: "https://picsum.photos/200/300",
          id: 3,
          linkUrl: 'sunglass'
        },
        {
          title: "Boots",
          imageUrl: "https://picsum.photos/200/300",
          id: 4,
          linkUrl: 'boots'
        },
        {
          title: "Watch",
          imageUrl: "https://picsum.photos/200/300",
          id: 5,
          linkUrl: 'watch'
        },
      ],
    };
  }

  render() {
    return (
      <Grid container spacing={3}>
        {this.state.sections.map(({ title, imageUrl, id, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
        ))}
      </Grid>
    );
  }
}

export default Directory;
