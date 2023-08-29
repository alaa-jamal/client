import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

const AddHouse = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [bedroom, setBedrooms] = useState("");
  const [bathroom, setBathrooms] = useState("");
  const [address, setAddress] = useState("");
  const [Description, setDescription] = useState("");
  const [type, setType] = useState("");


  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeBedroom = (event) => {
    setBedrooms(event.target.value);
  };

  const handleChangeBathroom = (event) => {
    setBathrooms(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (agree) => {
    setOpen(false);

    if (agree) {
      // Open Snackbar
      setSnackbarOpen(true);
      // Clear the text fields
      setTitle("");
      setPrice("");
      setBedrooms("");
      setBathrooms("");
      setAddress("");
      setDescription("");
      setType("");
      // Reset selected photo
      setSelectedPhoto(null);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  };
  
 const clear = ()=>{
  setTitle("");
  setDescription("");
  setBedrooms('');
  setBathrooms("");
  setPrice("");
  setSelectedPhoto("");
  setType("");
  setAddress("");
 }


  const houses = {
    title: title,
    Description: Description,
    address: address,
    price: price,
    type:type,
    bathroom: bathroom,
    bedroom: bedroom,
    selectedPhoto:selectedPhoto,
    
    
  };

  // const fetchData={
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(houses),

  // }

  // fetch('https://my-json-server.typicode.com/alaa-jamal/add-house-api/houses',fetchData)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.log(error))

  const handelAddHouse = () => {
    fetch(
      "https://my-json-server.typicode.com/alaa-jamal/add-house-api/houses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(houses),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        clear();
        setSnackbarOpen(true);
        
        console.log("Success:", data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const  handelAddHouse = async  (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('https://my-json-server.typicode.com/alaa-jamal/add-house-api/houses', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(houses),
  //     });

  //   }
  //  catch (error) {

  //   console.error('Error:', error);
  // }}

  return (
    <>
      <section className="addInformation">
        <section className="addInfo">
          <Typography
            className="add-info-title"
            variant="h5"
            component="h5"
            color="#1B4289"
            fontFamily="Bree Serif"
          >
            Add a new House
          </Typography>

          <section className="addInformationDetails">
            <TextField
              className="addInfoTitle"
              fullWidth
              label="Title"
              value={title}
              onChange={handleChangeTitle}
            />

            <TextField
              className="text-area-filed"
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              value={Description}
              onChange={handleChangeDescription}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth className="update-location">
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={address}
                  label="Location"
                  fullWidth
                  onChange={handleChangeAddress}
                >
                  <MenuItem value={"Gaza"}>Gaza</MenuItem>
                  <MenuItem value={"Rafah"}>Rafah</MenuItem>
                  <MenuItem value={"Khanyounis"}>Khanyounis</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <section className="udpate-price-type">
              <Box sx={{ minWidth: 120 }}>
                <FormControl className="update-type">
                  <InputLabel id="demo-simple-select-label">For</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="For"
                    defaultValue={"Rent"}
                    onChange={handleChangeType}
                  >
                    <MenuItem value={"Rent"}>Rent</MenuItem>
                    <MenuItem value={"Sale"}>Sale</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                className="update-price"
                id="outlined-Bedroom-input"
                label="Price"
                type="number"
                defaultValue={"200$"}
                sx={{ width: "120px" }}
                value={price}
                onChange={handleChangePrice}
              />
            </section>

            <section className="udpate-beds-bath">
              <TextField
                className="update-bed"
                id="outlined-Bedroom-input"
                label="Bedroom"
                type="number"
                defaultValue={"3"}
                sx={{ width: "120px" }}
                value={bedroom}
                onChange={handleChangeBedroom}
              />

              <TextField
                className="update-bath"
                id="outlined-Bedroom-input"
                label="Bathroom"
                type="number"
                defaultValue={"1"}
                sx={{ width: "120px" }}
                value={bathroom}
                onChange={handleChangeBathroom}
              />
            </section>

            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              // style={{ marginTop: '10px' }}
            />
            {selectedPhoto && (
              <div className="image-container" style={{ maxWidth: "100%" }}>
                <img
                  src={URL.createObjectURL(selectedPhoto)}
                  alt="Selected House"
                  className="image"
                />
              </div>
            )}
          </section>
        </section>

        <section className="save-add">
          <button className="save-add-btn" onClick={handelAddHouse}>
            Save
          </button>

          <Dialog
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure to Add your House information ?"}
            </DialogTitle>

            <DialogActions>
              <Button
                className="disagree-btn"
                onClick={() => handleClose(false)}
              >
                Disagree
              </Button>
              <Button
                className="agree-btn"
                onClick={() => handleClose(true)}
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </section>
      </section>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Information Added successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AddHouse;
