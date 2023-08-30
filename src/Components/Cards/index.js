import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./style.css";

export default function HouseCard({ house }) {
  const { title, description, image, bathroom, bedroom, price, city, id } =
    house;

  const [isFavorite, setIsFavorite] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <section>
      <Card
        className="house-card"
        sx={{ maxWidth: 345, maxHeight: 700, marginBottom: 5 }}
      >
        <CardMedia className="card-image" sx={{ height: 226 }} image={image} />

        <section className="fav-card">
          {isFavorite ? (
            <FavoriteOutlinedIcon
              className="fav-card-icon favorite"
              onClick={toggleFavorite}
            />
          ) : (
            <FavoriteBorderIcon
              className="fav-card-icon"
              onClick={toggleFavorite}
            />
          )}
        </section>
        <section className="house-type">{house.for}</section>

        <CardContent class="card-content">
          <section class="card-content-top">
            <Typography
              class="card-title"
              gutterBottom
              variant="h2"
              component="h2"
            >
              {title.split("").slice(0, 16).join("")}
            </Typography>
            <Typography
              class="card-price"
              gutterBottom
              variant="h2"
              component="h2"
            >
              {price}$
            </Typography>
          </section>
          <Typography
            variant="body2"
            color="text.secondary"
            class="card-description"
          >
            {description.split("").slice(0, 70).join("")}
          </Typography>
        </CardContent>

        <section className="cards-icon">
          <section className="beds-icon">
            <HotelIcon className="icon" />
            <Typography
              variant="p"
              component="p"
              color="#646464"
              fontSize="0.8rem"
            >
              {bedroom}beds
            </Typography>
          </section>
          <section className="baths-icon">
            <BathtubIcon className="icon" />
            <Typography
              variant="p"
              component="p"
              color="#646464"
              fontSize="0.8rem"
            >
              {bathroom}Baths
            </Typography>
          </section>
          <section className="locations-icon">
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

        <CardActions>
          <Button class="seeDetails-btn" size="small">
            <Link className="seeDetails-btn-link" to={`/details/${id}`}>
              see details
            </Link>
          </Button>
        </CardActions>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {isFavorite ? "Added to Favorites" : "Removed from Favorites"}
        </MuiAlert>
      </Snackbar>
    </section>
  );
}
