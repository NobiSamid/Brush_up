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
        },
        {
          title: "Jacket",
          imageUrl: "https://picsum.photos/200/300",
          id: 2,
        },
        {
          title: "Sunglass",
          imageUrl: "https://picsum.photos/200/300",
          id: 3,
        },
        {
          title: "Boots",
          imageUrl: "https://picsum.photos/200/300",
          id: 4,
        },
        {
          title: "Watch",
          imageUrl: "https://picsum.photos/200/300",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <Grid container spacing={3}>
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} />
        ))}
      </Grid>
    );
  }
}

export default Directory;
