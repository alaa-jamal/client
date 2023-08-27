import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import loginImg from "../../Utilis/images/login.png";
import "./style.css";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
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
              />
              <TextField
                className="username-filed"
                margin="dense"
                placeholder="Enter Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              {/* <Button  className="cancel-btn" onClick={handleClose}>Cancel</Button> */}
              <Button className="log-btn" onClick={handleClose}>
                Sign In
              </Button>
            </DialogActions>
          </section>
        </section>
      </Dialog>
    </>
  );
};

export default LoginPopup;
