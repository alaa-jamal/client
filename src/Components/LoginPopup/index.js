import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import loginImg from "../../Utilis/images/login.png";
import Typography from "@mui/material/Typography";
import "./style.css";
import AuthContext from "../Context/AuthContext";

const LoginPopup = () => {
  const { isLoggedIn, setisLoggedIn, login } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/alaa-jamal/houseapi/users"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      console.log("Logged in:", user);
      login(
        { username, password },
        { accessToken: username, refreshToken: username }
      );

      // onLogin(user);
      setIsOpen(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <section className="login-popup">
          <section className="login-popup-right">
            <img src={loginImg} />
          </section>

          <section className="login-popup-left">
            <DialogTitle className="sign-in-title">SignIn</DialogTitle>
            <DialogContent>
              <DialogContentText className="sign-in-title2">
                Welcome To Houses Website
              </DialogContentText>
              <TextField
                className="username-filed"
                margin="dense"
                placeholder="Enter User Name"
                type="text"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                className="username-filed"
                margin="dense"
                placeholder="Enter Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginError && (
                <p className="error-message">Incorrect username or password.</p>
              )}
              <section className="section-log-btn">
                <Button className="log-btn" onClick={handleLogin}>
                  Sign In
                </Button>
              </section>
              <Typography className="text-signup" variant="p" component="p">
                Not a member ? Sign Up
              </Typography>
            </DialogContent>
            <DialogActions></DialogActions>
          </section>
        </section>
      </Dialog>
    </>
  );
};

export default LoginPopup;
