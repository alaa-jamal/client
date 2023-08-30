import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import image from "../../Utilis/images/logo.png";
import { Link } from "react-router-dom";
import "@fontsource/roboto/400.css";
import LoginPopup from "../LoginPopup";
import SignPopup from "../SignUp";
import "./style.css";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isSignDialogOpen, setIsSignDialogOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // For Dialog (login/signup)
  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
  };
  const handleSignClick = () => {
    setIsSignDialogOpen(true);
  };

  return (
    <AppBar class="header" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="Logo" src={image} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            className="header-navigation"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </Button>
            <Button>
              <Link className="nav-links" to="/aboutus">
                About us
              </Link>
            </Button>
          </Box>
          <section className="header-right">
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="signup-btn" onClick={handleSignClick}>
              SignUp
            </button>
          </section>
        </Toolbar>
      </Container>

      {isLoginDialogOpen && <LoginPopup />}
      {isSignDialogOpen && <SignPopup />}
    </AppBar>
  );
}
export default NavBar;
