import React from 'react';
import aboutImage from '../../Utilis/images/aboutus.png';
import Typography from '@mui/material/Typography';
import './style.css'
const AboutUs = ()=>{
    return(
        <>
        <section className="about-section">
            <section className="about-section-right">
            <img className ="about"src={aboutImage}/>

            </section>
            <section className='about-section-left'>
            <Typography className="about-title" variant="h4" component="h4">
             About Us
            </Typography>

            <Typography className="about-title" variant="p" component="p">
            orem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
            </Typography>


            </section>

       

        </section>
        
        </>
        
    );

}

export default AboutUs;