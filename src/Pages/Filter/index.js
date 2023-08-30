import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { CardContainer } from "../../Components";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./style.css";

const Filter = () => {
  // initail Value
  const [houses, setHouse] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [room, setRoom] = useState(0);
  const [title, setTitle] = useState("");
  const minPrice = 0;
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

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Fetch all houses from API
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
        setFilter(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();

    let filterResult = houses

      .filter((house) => (location ? house.city === location : true))
      .filter((house) =>
        house.title.toLowerCase().includes(title.toLowerCase())
      )
      .filter((house) => (room ? house.bedroom === parseInt(room) : true))
      .filter((house) => (type ? house.for === type : true))
      .filter((house) => (price ? house.price === parseInt(price) : true));

    setFilter(filterResult);
  };

  return (
    <>
      <section className="filter-section">
        <form className="filter-search">
          <input
            className="filter-searchInput"
            type="search"
            placeholder="Search for the Title you want!"
            onChange={handleChangeTitle}
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
              <MenuItem value={"Gaza"}>Gaza</MenuItem>
              <MenuItem value={"Rafah"}>Rafah</MenuItem>
              <MenuItem value={"Khanyunis"}>Khanyunis</MenuItem>
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
              <MenuItem value={"rent"}>rent</MenuItem>
              <MenuItem value={"sale"}>sale</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-Bedroom-input"
            label="Room"
            type="number"
            sx={{ width: "120px" }}
            value={room}
            onChange={handleChangeRoom}
          />

          <section>
            <Typography
              variant="span"
              component="span"
              color="#888B97"
              textAlign="center"
            >
              Price
            </Typography>
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
        </section>
      </section>

      <Container className="container-filter">
        <Typography
          variant="h5"
          component="h4"
          color="#1B4289"
          textAlign="center"
        >
          Houses Available : (
          <span className="numOfHouse">
            {" "}
            {filter.length === 0 ? "Not found " : filter.length}{" "}
          </span>
          )
        </Typography>

        <section className="data-filter-section">
          <CardContainer className="filter-container" houses={filter} />
        </section>
      </Container>
    </>
  );
};
export default Filter;
