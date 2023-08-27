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

  //  Fetch API
  // useEffect(() => {
  //   fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/users")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setUser(data)

  //     )
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  // console.log(user,8888);

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetch(
          "https://my-json-server.typicode.com/alaa-jamal/houseapi/users"
        );
        const userData = await data.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, []);
  console.log(user)

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
            autoFocus
            value={user[0].username}
            label="UserName"
            type="text"
            fullWidth
            defaultValue="Tasneem Jamal"
          />
          
          <TextField
            fullWidth
            label="Pasword"
            autoFocus
            type="password"
            value={user[0].password}
            defaultValue={"*******"}
          />
          <TextField
            fullWidth
            label="Email"
            autoFocus
            type="email"
            value={user[0].email}
            defaultValue={"tasneem@gmail.com"}
          />
          <TextField
            fullWidth
            label="Phone"
            autoFocus
            type="phone"
            value={user[0].phone}
            defaultValue={"0592258631"}
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
