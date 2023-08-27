import React, { useState } from "react";
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

const SignPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog className="dialog-signup" open={isOpen} onClose={handleClose}>
        <section className="signup-popup">
          <section className="signup-popup-right">
            <img src={loginImg} />
          </section>

          <section className="signup-popup-left">
            <DialogTitle className="sign-up-title">SignUp</DialogTitle>
            <DialogContent>
              <DialogContentText className="sign-up-title2">
                Welcome To Houses Website
              </DialogContentText>
              <TextField
                className="username-signup"
                margin="dense"
                placeholder="Enter User Name"
                type="text"
                fullWidth
              />
              <TextField
                className="email-signup"
                margin="dense"
                placeholder="Enter Email Address"
                type="email"
                fullWidth
              />
              <TextField
                className="password-signup"
                margin="dense"
                placeholder="Enter Password"
                type="password"
                fullWidth
              />

              <TextField
                className="phone-signup"
                margin="dense"
                placeholder="Enter Phone"
                type="phone"
                fullWidth
              />
              <section className="section-signup-btn">
                <Button className="signUp-btn" onClick={handleClose}>
                  Sign Up
                </Button>
              </section>
              <Typography className="text-signup" variant="p" component="p">
                Have Account ? Sign In
              </Typography>
            </DialogContent>
            <DialogActions></DialogActions>
          </section>
        </section>
      </Dialog>
    </div>
  );
};

export default SignPopup;
