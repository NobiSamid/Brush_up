import React from 'react'
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { withRouter } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "5rem",
  boxShadow: "0 8px 8px 2px rgba(15, 255, 80, .5)",
}));

const MenuItem = ({ title, imageUrl, history }) => {
  return (
        <Grid item xs={4} md={4}>
          <Item onClick={() => history.push()} style={{backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <h3>{title}</h3>
            <span>Shop now</span>
          </Item>
        </Grid>
  );
};

export default withRouter(MenuItem);
// by wrapping MenuItem with withRouter it will return super power MenuItem component with acces to location match and history 
