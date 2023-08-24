import React,{useEffect,useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import './style.css';



const UserProfile = ()=>{


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
    {/* <OutlinedInput
            id="outlined-adornment-weight"

            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            /> */}
<section className='userInfo'>

<TextField fullWidth  id="fullWidth" value={user.username} /> {user.username}
<TextField fullWidth  id="fullWidth" value={user.password} /> {user.password}
<TextField fullWidth  id="fullWidth" value={user.email} />
<TextField fullWidth  id="fullWidth" value={user.phone} />
{console.log(user)}

</section>
<section className='save-edit'>
<button className='save-edit-btn'>Save Edit</button>
</section>



    </section>
    
    </>
    )
}

export default UserProfile;