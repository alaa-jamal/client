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
import { Navigate } from "react-router-dom";
import "./style.css";

const SignPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSignUp = async () => {
    const formData = {
      username,
      password,
      email,
      mobile,
    };

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/tasneam/api-signup/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        handleClose();
        Navigate("/LoginPopup");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
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
                value={username}
                onChange={handleUsername}
              />
              <TextField
                className="email-signup"
                margin="dense"
                placeholder="Enter Email Address"
                type="email"
                fullWidth
                value={email}
                onChange={handleEmail}
              />
              <TextField
                className="password-signup"
                margin="dense"
                placeholder="Enter Password"
                type="password"
                fullWidth
                value={password}
                onChange={handlePassword}
              />

              <TextField
                className="phone-signup"
                margin="dense"
                placeholder="Enter Phone"
                type="phone"
                fullWidth
                value={mobile}
                onChange={handleMobile}
              />
              <section className="section-signup-btn">
                <Button className="signUp-btn" onClick={handleSignUp}>
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
