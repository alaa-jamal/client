import React, { useEffect, useState } from "react";
import heroImage from "../../Utilis/images/hero-img.png";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";
import { CardContainer, HouseCard } from "../../Components";
import {Link} from 'react-router-dom';
import "./style.css";

const Landing = () => {
  // Fetch houses from API
  //1) initial value
  const [houses, setHouse] = useState([]);
  // const [newHouses,setNewHouse]=useState([]);
  //2) Use Effect
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

  // Display newest House

  return (
    <>
      <section className="hero-section">
        <section className="hero-content">
          <Typography className="hero-title1" variant="h2" component="h2">
            Find Your
          </Typography>
          <Typography className="hero-title2" variant="h2" component="h2">
            DREAM HOUSE
          </Typography>
          <Typography className="hero-subtitle" variant="p" component="p">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </Typography>

          <form className="searchhh">
            <input
              className="hero-searchInput"
              type="search"
              placeholder="Search for the location you want!"
            />
            <button className="serach-btn">
              <Link to ="/filter"><SearchIcon className="searchicon"></SearchIcon></Link>
              
            </button>
          </form>
        </section>

        <section className="hero-img">
          <img src={heroImage} alt="hero house image" />
        </section>
      </section>

      <section className="newest-houses">
        <section className="new">
          <Typography
            className="newest-houses-title"
            variant="h4"
            component="h4"
          >
            Newest Houses
          </Typography>

          <section className="card-conatiner">
        
            {/* <CardContainer house={house} /> */}
            {/* <CardContainer houses={houses} /> */}
            { houses && houses.length > 0 ? ( 
        houses.slice(0, 6).map((house) => (
          <HouseCard house={house} />
        ))
      ) : (
        <p>Loading</p>
      )} 
  
            
          </section>
        </section>
      </section>
    </>
  );
};
export default Landing;

        