import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./style.css";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // For snakbar& Dialog
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setOpen(false);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleName = (e) => {
    //  setName(user.username);
   setName(e.target.value);
  };
  const handlePassword = (e) => {
     setPassword(e.target.value);
    //setPassword(user.password);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
      //setEmail(user.email);
  };
  const handlePhone = (e) => {
     setPhone(e.target.value);
    //setPhone(user.phone);
  };

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetch(
          "https://my-json-server.typicode.com/alaa-jamal/houseapi/users"
        );
        const userData = await data.json();
        setUser(userData[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <section className="userInformation">
        <section className="userInfo">
          <Typography
            className="user-info-title"
            variant="h5"
            component="h5"
            color="#1B4289"
            font-family="Bree Serif"
          >
            User Information
          </Typography>

          {/* <Avatar alt="personal Img" src={user[0].image} /> */}
          <Avatar src="/broken-image.jpg" />

          <TextField
            label="UserName"
            // value={name}
            value={user.username? user.username : name}
            type="text"
            fullWidth
             variant="outlined"
            onChange={handleName}
          />

          <TextField
            fullWidth
            label="Password"
              value={user.password? user.password : password}
            //value={password}
            type="password"
            variant="outlined"
            onChange={handlePassword}
          />
          <TextField
            fullWidth
            label="Email"
             value={user.email? user.email : email}
            //value={email}
            variant="outlined"
            type="email"
            onChange={handleEmail}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Phone"
             value={user.phone? user.phone : phone}
           // value={phone}
            type="phone"
            onChange={handlePhone}
          />
        </section>

        <section className="save-edit">
          <button className="save-edit-btn" onClick={handleOpen}>
            Save Edit
          </button>

          {/* For Dialoge & Sanakbar */}

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title" className="dialogo-title">
              {"Are you sure to update your personal information?"}
            </DialogTitle>
            <DialogActions>
              <Button
                onClick={handleClose}
                className="disagree-btn"
                color="primary"
              >
                Disagree
              </Button>
              <Button
                onClick={handleAgree}
                className="agree-btn"
                color="primary"
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert onClose={handleSnackbarClose} severity="success">
              Update Successful!
            </MuiAlert>
          </Snackbar>
        </section>
      </section>
    </>
  );
};

export default UserProfile;
