import React, { useEffect, useState } from "react";
import heroImage from "../../Utilis/images/hero-img.png";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";
import { CardContainer } from "../../Components";
import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  const [houses, setHouse] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/houses")
      .then((response) => response.json())
      .then((data) => {
        data.length = 6;
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
              <Link to="/filter">
                <SearchIcon className="searchicon"></SearchIcon>
              </Link>
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
            <CardContainer houses={houses} />
          </section>
        </section>
      </section>
    </>
  );
};
export default Landing;
