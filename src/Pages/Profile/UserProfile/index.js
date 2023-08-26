import React,{useEffect,useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import './style.css';



const UserProfile = ()=>{

  // For snakbar& Dialog
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const [open, setOpen] = useState(false);
const [snackbarOpen, setSnackbarOpen] = useState(false);

const handleOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

const handleAgree = () => {
setOpen(false);
setSnackbarOpen(true);
};

const handleSnackbarClose = () => {
setSnackbarOpen(false);
};



     //1) initial value
  const [user, setUser] = useState([]);
  // const [newHouses,setNewHouse]=useState([]);
  //2) Use Effect
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/users")
      .then((response) => response.json())
      .then((data) => {
        
        setUser(data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(user);

    return (
      
        <>
 
    <section className='userInformation'>
  
<section className='userInfo'>


<Typography
className='user-info-title'
 variant="h5"
  component="h5"
  color ="#1B4289"
  font-family= 'Bree Serif'>
  User Information
</Typography>

{/* <Avatar alt="personal Img" src={user[0].image} /> */}
<Avatar src="/broken-image.jpg" />




<TextField
            autoFocus
            
            label="UserName"
            type="text"
            fullWidth
            defaultValue="Alaa Jamal"
            />
{/* <TextField fullWidth  id="fullWidth" value={user[0].password} />  */}
<TextField fullWidth label="Pasword"  autoFocus type="password"   defaultValue={"**********"} /> 
<TextField fullWidth label="Email"  autoFocus type = "email" defaultValue={"alaa99702@gmail.com"} />
<TextField fullWidth label="Phone" autoFocus type = "phone" defaultValue={"0592813281"} /> 

</section>

<section className='save-edit'>
<button className='save-edit-btn' onClick={handleOpen}>Save Edit</button>

{/* For Dialoge & Sanakbar */}

<Dialog open={open} onClose={handleClose}>
       
       <DialogTitle id="alert-dialog-title">
           {"Are you sure to update your personal information?"}
         </DialogTitle>
         <DialogActions>
           <Button onClick={handleClose} className="disagree-btn" color="primary">
             Disagree
           </Button>
           <Button onClick={handleAgree} className="agree-btn" color="primary">
             Agree
           </Button>
         </DialogActions>
       </Dialog>
       <Snackbar
         open={snackbarOpen}
         autoHideDuration={6000}
         onClose={handleSnackbarClose}
       >
         <MuiAlert onClose={handleSnackbarClose} severity="success">
           Update Successful!
         </MuiAlert>
       </Snackbar>
     
 
</section>



    </section>
    
    </>
    )
}

export default UserProfile;