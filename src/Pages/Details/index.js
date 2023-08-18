import React, { useEffect, useState } from "react";
import detailsImage from "../../Utilis/images/details-img.png";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar } from "@mui/material";
import ownerImg from "../../Utilis/images/ownerImg.png";
import { useParams } from "react-router-dom";
import "./style.css";

const Details = () => {
  //1)  initaial value
  let { id } = useParams();
  const [houses, setHouse] = useState([]);

  // Fetch house details from API:
  //2) Use Effect
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/alaa-jamal/houseapi/houses/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
      <section className="details-section">
        <section className="details-left">
          <img className="house-img" src={houses.image} alt="house-img" />
          <section className="details-left-top">
            <section className="details-left-title">
              <Typography
                className="details-house-title"
                variant="h5"
                component="h5"
              >
                {houses.title}
              </Typography>
              <section className="fav-card">
                <FavoriteBorderIcon className="fav-card-icon" />
              </section>
            </section>

            <section className="details-cards-icon">
              <section className="bed-icon">
                <HotelIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}beds
                </Typography>
              </section>
              <section className="bath-icon">
                <BathtubIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bathroom}Baths
                </Typography>
              </section>
              <section className="location-icon">
                <LocationOnIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.city}
                </Typography>
              </section>
            </section>

            <Typography
              className="details-house-price"
              variant="p"
              component="p"
            >
              {houses.price}$/month
            </Typography>
          </section>

          <section className="details-para">
            <Typography variant="p" component="p">
              {houses.description}
            </Typography>
          </section>
        </section>

        <section className="details-right">
          <Typography className="contact-title" variant="p" component="p">
            Contact with owner
          </Typography>
          <Avatar
            className="ownerimg"
            alt="owner-img"
            src={ownerImg}
            sx={{ width: 56, height: 56 }}
          />

          <section className="details-data">
            <section className="contact-owner">
              <PersonIcon className="contact-icon" />
              <Typography
                Typography
                className="contact-text"
                variant="p"
                component="p"
              >
                Alaa Jamal
              </Typography>
            </section>

            <section className="contact-owner">
              <EmailIcon className="contact-icon" />
              <Typography
                className="contact-text"
                variant="span"
                component="span"
              >
                alaa99702@gmail.com
              </Typography>
            </section>

            <section className="contact-owner">
              <PhoneEnabledIcon className="contact-icon" />
              <Typography
                Typography
                className="contact-text"
                variant="span"
                component="span"
              >
                0592813281
              </Typography>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
export default Details;
