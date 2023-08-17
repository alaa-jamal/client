import React ,{useEffect,useState }  from 'react';
import detailsImage from '../../Utilis/images/details-img.png';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import './style.css';

const Details =()=>{

    // Fetch user data
    //1) initial value
  const [owner, setOwner] = useState([]);
  // const [newHouses,setNewHouse]=useState([]);
  //2) Use Effect
//   useEffect(() => {
//     fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setOwner(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   },[]);
//   console.log(owner);
  
//    const {username,email,phone}=owner;
    return (
        <>
        <section className='details-section'>
            <section className='details-left'>
                <section className='details-left-top'>
                <img src={detailsImage}/>
                <Typography className='details-house-title' variant="h4" component="h4">
                 Classic House
            </Typography>
            <Typography className='details-house-price' variant="h4" component="h4">
                 300$/Month
            </Typography>
                </section>

                <section className='details-para'>
                <Typography className='details-house-price' variant="p" component="p">
                kjhhhhhhhhhhhhhhhhhhhhdsfhudsfkjjjjjjjjjjjjjjjjjjjsdahyaujhfjhadsk
            </Typography>

                </section>
              
            

            </section>

            <section className='details-right'>
            <Typography className='contact-title' variant="h6" component="h6">
                 Contact with owner
            </Typography>
            <section className='contact-details'>
            <section className='contact-owner'>
            <PersonIcon className='contact-icon'/><Typography Typography className='contact-text'  variant="p" component="p">
                 {username}
            </Typography>
            </section>

          <section className='contact-owner'>
          <EmailIcon className='contact-icon'/><Typography className='contact-text'  variant="span" component="span">
                 {owner.email}
            </Typography>
          </section>

          <section className='contact-owner'>
          <PhoneEnabledIcon className='contact-icon'/><Typography Typography className='contact-text'  variant="span" component="span">
                {owner.phone}
            </Typography>
          </section>


            </section>
            
           

            </section>

        </section>
        </>
    );
}
export default Details;