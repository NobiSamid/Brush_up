import React from 'react'
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#50C878",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "5rem",
  boxShadow: "0 8px 8px 2px rgba(15, 255, 80, .5)",
}));

export default function MenuItem({title}) {
  return (
        <Grid item xs={4} md={4}>
          <Item>
            <h3>{title}</h3>
            <span>Shop now</span>
          </Item>
        </Grid>
  )
}
