import React from 'react';
import footerImage from '../../Utilis/images/logo.png';
import Typography from '@mui/material/Typography';
const Footer =()=>{
    return(
        <>
        <section className="footer-section">
            <section className="footer-section-right">
                <img src={footerImage}/>
                <Typography className ="footer-title"variant="p" component="p">
            Everything you need about finding your place to live will be here, where it will be easier for you
                </Typography>

            </section>
            <section className="footer-section-center">
                
            </section>

        </section>
        </>
    );
}

export default Footer;