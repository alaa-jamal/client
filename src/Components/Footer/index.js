import React from "react";
import footerImage from "../../Utilis/images/logo.png";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <section className="footer-section-left">
          <img className="footerIcon" src={footerImage} />
          <Typography className="footer-title" variant="p" component="p">
            Everything you need about finding your place to live will be here,
          </Typography>
          <Typography className="footer-title" variant="p" component="p">
            where it will be easier for you
          </Typography>
        </section>
        <section className="footer-section-center">
          <Typography variant="h5" component="h5">
            Links
          </Typography>

          <Typography variant="p" component="p">
            <Link className="footer-links" to="/">
              Houses
            </Link>
          </Typography>

          <Typography variant="p" component="p">
            <Link className="footer-links" to="/aboutus">
              About Us
            </Link>
          </Typography>
        </section>

        <section className="footer-section-right">
          <Typography className="footer-contact" variant="h5" component="h5">
            Contact Us
          </Typography>
          <section class="footer-contact-icons">
            <FacebookIcon />
            <WhatsAppIcon />
            <InstagramIcon />
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
