import { Grid } from '@mui/material';
import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => {
  return (
    <Grid container>
      <h2>{title.toUpperCase()}</h2>
      <Grid container spacing={3}>
        {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))
        }
      </Grid>
    </Grid>
  );
};

export default PreviewCollection;