import React from "react";
import aboutImage from "../../Utilis/images/aboutus.png";
import Typography from "@mui/material/Typography";
import "./style.css";
const AboutUs = () => {
  return (
    <>
      <section className="about-section">
        <section className="about-section-right">
          <img className="img-about" src={aboutImage} />
        </section>
        <section className="about-section-left">
          <Typography
            variant="h4"
            component="h4"
            textAlign="center"
            marginBottom="40px"
            fontFamily="Bree Serif"
            color="#1B4289"
          >
            About Us
          </Typography>

          <Typography variant="p" component="p" color="#343434">
            Many people want to offer their homes for sale for various reasons,
            one of them may want to do so until he moves to a new job far from
            his place of residence, or he travels abroad, and many people want
            to sell their apartments because of problems related to the
            apartment such as humidity, space, and area, and some of them sell
            Apartments for the purpose of investment.An electronic real estate
            company, launched by Saudi investors in 2017, and it has been
            officially registered in Europe, and its activity is to provide real
            estate marketing service, whether for sale or rent in various parts
            of the world, especially in Saudi Arabia, the Gulf countries,
            European countries and the United States, knowing that all site
            services are provided for free. Rent offers real estate offered for
            rent for long periods of time, up to at least 6 months, and rent has
            a huge database containing thousands of properties offered for rent,
            and its design is easy and smart, making it easy for the user to use
            it.
          </Typography>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
