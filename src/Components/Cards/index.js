import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import {Link} from 'react-router-dom';
import './style.css';

export default function HouseCard({house}) {
    const {title,description,image,bathroom,bedroom,price,city}=house;

  return (
    <section>
      <Card className="house-card"  
      sx={{ maxWidth: 345,
         maxHeight:700,
         marginBottom:5 }}>
      <CardMedia className="card-image"
        sx={{ height: 226}}
        image ={image}
      />
      <section className="fav-card">
      <FavoriteBorderIcon className="fav-card-icon" />
      </section>
       
      <CardContent class="card-content">
        <section class="card-content-top">
        <Typography class="card-title" gutterBottom variant="h2" component="h2">
        {title}
        </Typography>
        <Typography class="card-price" gutterBottom variant="h2" component="h2">
        {price}$
        </Typography>
        </section>
        <Typography variant="body2" color="text.secondary" className="card-description">
         {description.split('').slice(0,70).join('')}
         
        </Typography>
      </CardContent>
      
        <section className="cards-icon">

        <section className="bed-icon">
        <HotelIcon className="icon"/>
          <Typography variant="p" component="p">
            {bedroom}beds
          </Typography>
        </section>
        <section className="bath-icon">
        <BathtubIcon className="icon"/>
          <Typography variant="p" component="p">
            {bathroom}Baths
          </Typography>
        </section>
        <section className="location-icon">
        <LocationOnIcon className="icon"/>
          <Typography variant="p" component="p">
            {city}
          </Typography>
        </section>

        

      </section>
      
      <CardActions>
        <Button class="seeDetails-btn" size="small">See Details </Button>
      </CardActions>
    </Card>

    </section>

    
  );
}
