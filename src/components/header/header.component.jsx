import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brush-up
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button>Menu</Button>
          </IconButton>
          <NavLink to="/" style={{ textDecoration: "none", color: 'black' }}>Home</NavLink>
          <NavLink to="/shop" style={{ textDecoration: "none", color: 'black' }}>Shop</NavLink>
          <NavLink to="/sign-up-in" style={{ textDecoration: "none", color: 'black' }}>Sign Up & in</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
