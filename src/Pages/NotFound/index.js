import React from 'react';
import errorImage from '../../Utilis/images/error-img.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import{Link} from 'react-router-dom';
import './style.css'
const ErrorPage= ()=>{
    return(
        <>
        <section className="error-section">
            <section className="error-section-img">
            <img src={errorImage}  />
            </section>
            <section className='error-section-bottom'>
            <Typography 
             variant="h4"
              component="h4"
              textAlign="center"
              marginBottom="40px"
              paddingTop={5}
              fontFamily="Bree Serif"
              color="#1B4289">
             Page Not Found
            </Typography>
             <section className='back-btn-section'>
                <button className='back-btn'>
                <Link className='back-link'  to="/">Go To Home</Link>
                </button>
             </section>

            

            </section>

       

        </section>
        
        </>
        
    );

}

export default ErrorPage;