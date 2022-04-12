import { Grid } from '@mui/material';
import React from 'react';

const CollectionItem = ({id, name, price, imageUrl}) => {
  return (
    <Grid item xs={4} md={4}>
      <div
        style={{backgroundImage: `url(${imageUrl})`}}
      >
      </div>
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </Grid>
  );
};

export default CollectionItem;