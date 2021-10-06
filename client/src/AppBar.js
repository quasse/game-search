import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./AppBar.css";
import { Button } from "@mui/material";

import { Link, NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import User from "./Components/User";
import Auth from "./utils/auth";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    if (Auth.loggedIn()) {
      Auth.logout();
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {Auth.loggedIn() ? (
        <div>
          <NavLink to="/profile">
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </NavLink>
          <MenuItem
            onClick={function () {
              handleMenuClose();
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </div>
      ) : (
        <div>
          <NavLink to="/login">
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>{" "}
          </NavLink>
          <NavLink to="/signup">
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </NavLink>
        </div>
      )}
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div>
        <NavLink to="/">
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>{" "}
        </NavLink>
      </div>
      {Auth.loggedIn() ? (
        <div>
          <NavLink to="/profile">
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </NavLink>
          <MenuItem
            onClick={function () {
              handleMenuClose();
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </div>
      ) : (
        <div>
          <NavLink to="/login">
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>{" "}
          </NavLink>
          <NavLink to="/signup">
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </NavLink>
        </div>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button color="inherit">
                <h1 style={{ color: "white", size: "small" }}>ATTS Games</h1>
              </Button>
            </Link>
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit"> */}
            <Badge color="error">{/* <MailIcon /> */}</Badge>
            {/* </IconButton> */}
            {/* <IconButton */}
            {/* size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsIcon />
              </Badge> */}
            {/* </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {/* Display Username if logged in */}
          <User />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
