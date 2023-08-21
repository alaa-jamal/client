import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { CardContainer } from "../../Components";
import TextField from "@mui/material/TextField";
 import Slider from "@mui/material/Slider"
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

import "./style.css";

const Filter = () => {
  // initail Value
  const [houses, setHouse] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [room, setRoom] = useState(0);
  const minPrice = 100;
  const maxPrice = 450;
  const [price, setPrice] = useState();
  const [filter, setFilter] = useState([]);

  //  handel fun for controlled input
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleChangePrice = (event, newValue) => {
    setPrice(newValue);
  };

  

  // Fetch all houses from API
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetch  for filter category (location):
  // useEffect(() => {
  //     fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/location")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLocation(data);
  //         // console.log(location);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);

  // console.log(houses[0].city);
  // if(houses[0].city===location){
  //   console.log("correct location")
  // }else{
  //   console.log("error location")
  // }
  // const filterCategory = [location,type]

  const handleFilter = (event) => {
    event.preventDefault();
    const filterResult = houses.filter((house) => {
      return ((house.city === location)||
             (house.bedroom === +room) ||
             (house.price === price))
      
  
           
      

      // return(

      //   // ((house.city === location) ||(house.bedroom === +room)||(house.price === price))||
      //   // ((house.city === location) &&(house.bedroom === +room))





      // )
            
            //  (house.city ===location && house.bedroom===room)
            //  ;
    });

    setFilter(filterResult);
     console.log(filterResult);
    console.log("hi from filter page");
  };

  return (
    <>
      <section className="filter-section">
        <form className="filter-search">
          <input
            className="filter-searchInput"
            type="search"
            placeholder="Search for the location you want!"
            onChange={handleChangeLocation}
          />
          <button className="filter-serach-btn" onClick={handleFilter}>
            Search
          </button>
        </form>

        <section className="filter-section-bottom">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={location}
              onChange={handleChangeLocation}
              autoWidth
              label="location"
            >
              {/* {console.log(location)} */}
              {/* {location.map((option) => 
            <MenuItem key={option.city} value={option.city}>
              {option.city}
            </MenuItem>
          
)} */}
              <MenuItem value={"Gaza"}>Gaza</MenuItem>
              <MenuItem value={"Rafah"}>Rafah</MenuItem>
              <MenuItem value={"Khanyunis"}>Khanyunis</MenuItem>

              {/* //  {console.log(option)} // array
          //  {console.log(option.city)} // khanyouis ,gaza,rafah */}
            </Select>
          </FormControl>

          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">For</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={type}
              onChange={handleChangeType}
              autoWidth
              label="For"
            >
              <MenuItem value={"Rent"}>Rent</MenuItem>
              <MenuItem value={"Sale"}>Sale</MenuItem>
            </Select>
          </FormControl> */}
          <TextField 
            id="outlined-Bedroom-input"
            label="Room"
            type="number"
            sx={{ width: "120px" }}
            value={room}
            onChange={handleChangeRoom}
          />

           <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Room
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={room}
              onChange={handleChangeRoom}
              autoWidth
              label="For"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>


          <section>
            <Typography
            variant="span"
            component="span"
            color="#888B97"
            textAlign="center"
            
            
            >Price</Typography>
            <Slider
              aria-label="Small"
              name="price"
              value={price}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
             
              min={minPrice}
              max={maxPrice}
              variant="outlined"
              style={{ width: "300%" }}
              
              
              onChange={handleChangePrice}
            />
          </section>




{/*           
      { type==="Rent"? console.log("hi"):console.log("error")}
      { location==="Gaza"? console.log("hiGaza"):console.log("notfound")} */} 

          {/* <Slider
            getAriaLabel={() => "Price range"}
            value={priceRangeValue}
            onChange={handlePrice}
            valueLabelDisplay=""
            min={minmin}
            max={maxmax}
            style={{ width: "300%" }}
          /> */}
        </section>
      </section>
     
     <Container  className="container-filter">
     <Typography
          variant="h5"
          component="h4"
          color="#1B4289"
          textAlign="center"
        >
          <span className="numOfHouse"> {filter.length} </span>
           Houses Available
        </Typography>
  
     <section className="data-filter-section">
    
     
        <CardContainer className='filter-container' houses={filter} />
      </section>
     </Container>
     
    </>
  );
};
export default Filter;
