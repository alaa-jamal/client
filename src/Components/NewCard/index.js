import React,{useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from "@mui/material/Typography";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NewCard = ({house})=>{
    const {title,description,image,bathroom,bedroom,price,city,id,type}=house;
    console.log(house,999);
    const [titelHouse, setTitelHouse] = useState("");
    const [descriptionHouse,setDescriptionHouse]=useState("");
    const [locationHouse, setLocationHouse] = useState('');
    const [typeHouse, setTypeHouse] = useState('');
    const [priceHouse, setPriceHouse] = useState("");
    const [bedroomHouse, setBedroomHouse] = useState("");
    const [bathroomHouse, setBathroomHouse] = useState("");
     const [open, setOpen] = React.useState(false);   // For Dialog
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
    const handleChangeTitle = (event) => {
      setTitelHouse(event.target.value);
    };
    const handleChangeDescription = (event) => {
      setDescriptionHouse(event.target.value);
    };
    const handleChangeLocation = (event) => {
      setLocationHouse(event.target.value);
    };
  
    const handleChangeType = (event) => {
      setTypeHouse(event.target.value);
    };
  
    const handleChangePrice = (event) => {
      setPriceHouse(event.target.value);
    };
  
    const handleChangeBedroom=(event)=>{
      setBedroomHouse(event.target.value);
  
    }
  
    const handleChangeBathroom=(event)=>{
      setBathroomHouse(event.target.value);
  
    }

    return (

        <>

<section className="myHouses">
        <section className="myHouses-img">
          <img src= {image}/>
        </section>

        <section className="myHouses-details">
          <Typography
            className="myHouses-titel"
            variant="h6"
            component="h6"
            color="#1B4289"
          >
            {title}
          </Typography>

          <section className="house-cards-icon">
            <section className="beds-icon" >
              <HotelIcon className="icon" />
              <Typography 
              
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                {bedroom} beds
              </Typography>
             
            </section>
            <section  className="baths-icon">
              <BathtubIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                {bathroom} Baths
              </Typography>
            </section>

            <section  className="locations-icon">
              <LocationOnIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                {city}
              </Typography>
            </section>

          </section>

          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            marginTop={3}
            color={"#1B4289"}
           className="myHouses-price"
          >
            {price}$/month
          </Typography>
        </section>

        <section className="myHouses-icons">

            <ModeEditIcon className="edit-icon" onClick={handleClickOpen}/>
           < DeleteOutlineIcon className="delete-icon"/>

            
        </section>
      </section>

      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="alert-dialog-header-title" color={"white"}>
          {"Update House Information"}
        </DialogTitle>
        <DialogContent className="dialog-content">
          <DialogContentText id="alert-dialog-description">
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
           
            />

<TextField className="text-area"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth
          value={description}

        
        />


<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className="update-location">
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Location"
          
          onChange={handleChangeLocation}
        >
          <MenuItem value={"Gaza"}>Gaza</MenuItem>
          <MenuItem value={"Rafah"}>Rafah</MenuItem>
          <MenuItem value={"Khanyounis"}>Khanyounis</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <section className="udpate-price-type">

    <Box sx={{ minWidth: 120 }}>
      <FormControl  className="update-type"  >
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




    

    





        
















          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className = "save-btn"onClick={handleClose}>Save</Button>
          <Button className="cancel-btn" onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
     
    </>


    );
    
}

export default NewCard;