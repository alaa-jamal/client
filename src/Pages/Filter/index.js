import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { CardContainer } from "../../Components";
// import { Stack, Typography, Slider, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./style.css";

const Filter = () => {
  // initail Value
  const [houses, setHouse] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [room, setRoom] = useState(0);
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

  const handleFilter = () => {
    const filterResult = houses.filter((house) => {
      return house.city === location;
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

          <FormControl sx={{ m: 1, minWidth: 120 }}>
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
          </FormControl>

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

      <section className="data-filter-section">
        <CardContainer houses={filter} />
      </section>
    </>
  );
};
export default Filter;
