import React, { useState, useContext } from "react";
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
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./style.css";
import AuthContext from '../Context/AuthContext';

const settings = ['Profile', 'Logout'];

function NavBar() {
  const {isLoggedIn } = useContext(AuthContext);

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
          
          {isLoggedIn ? (
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {/* <Avatar alt={users.username} />  */}
              {/* Use userData to display user info */}
              {/* src={users.avatar}  */}
                <Avatar className="avatar-profile" alt="Alaa Jamal" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <section className="section-profile">
                <Button>
                  <Link className="nav-profile" to ="/Profile">Profile</Link>
                  </Button>
                <Button>
                <Link className="nav-profile" to ="/Profile">log out</Link>
                </Button>
              </section>
            </Menu>
          </Box>
          ) : (
         <section className="header-right">
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="signup-btn" onClick={handleSignClick}>
              SignUp
            </button>
          </section>
      )}
          {/* <section className="header-right">
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="signup-btn" onClick={handleSignClick}>
              SignUp
            </button>
          </section> */}
        </Toolbar>
      </Container>

      {isLoginDialogOpen && <LoginPopup />}
      {isSignDialogOpen && <SignPopup />}
    </AppBar>
  );
}
export default NavBar;
