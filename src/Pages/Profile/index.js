import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Drawer from '@mui/material/Drawer';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserProfile from './UserProfile';
import "./style.css";




//  BreadCrumb
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// start Tab :
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

//   End Tab







// const drawerWidth = 240;  
const Profile = (props) => {
    // const { window } = props;
    // const [mobileOpen, setMobileOpen] = React.useState(false);
    // const navigate = useNavigate();
   

    // Start tab
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   End Tab
  
    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };
  
    // const drawer = (
    //   <div>
    //     <Toolbar  />

    //     <Typography
    //   variant="h6"
    //   component="h6"
    //   color="#FFFFFF"
    //   textAlign="center"
    //   marginTop={5}
    //   marginBottom={5}
    //   fontFamily={'Bree Serif'}
    //   fontSize="17px"
    // >
    //   <span className="hi">Hi  </span>
    //    Alaa Jamal
    // </Typography>
         
        
    //     <List>
    //         <ListItem onClick={()=>{navigate("/user")}}>
    //           <ListItemButton>
    //             <ListItemIcon>
    //                <PersonIcon/>
    //             </ListItemIcon>
    //             <ListItemText primary="Profile" />
    //           </ListItemButton>
    //         </ListItem>
       
    //     </List>

    //     <List>
          
    //       <ListItem >
    //         <ListItemButton>
    //           <ListItemIcon>
    //              <HomeIcon/>
    //           </ListItemIcon>
    //           <ListItemText primary="My Houses" />
    //         </ListItemButton>
    //       </ListItem>
     
    //   </List>

    //   <List>
          
    //       <ListItem >
    //         <ListItemButton>
    //           <ListItemIcon>
    //              <FavoriteIcon/>
    //           </ListItemIcon>
    //           <ListItemText primary="Favorite" />
    //         </ListItemButton>
    //       </ListItem>
     
    //   </List>

    //   <List>
          
    //       <ListItem >
    //         <ListItemButton>
    //           <ListItemIcon>
    //              <AddCircleIcon/>
    //           </ListItemIcon>
    //           <ListItemText primary="Add New House" />
    //         </ListItemButton>
    //       </ListItem>
     
    //   </List>

     
       
       
    //   </div>
    // );
  
    // const container = window !== undefined ? () => window().document.body : undefined;
    
 
    
  return (
    <>
      <section className="profile-section">
        <section
          className="profile-section-top"
          role="presentation"
          onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb" paddingLeft={15} paddingTop={5}>
            <Link underline="hover" color="#FFFFFF" href="/">
              Home
            </Link>
            <Typography color="#FFFFFF">Profile</Typography>
          </Breadcrumbs>
        </section>

         <section className="profile-section-bottom">

         {/* <Typography
       variant="h6"
       component="h6"
       color="#FFFFFF"
      textAlign="center"
       marginTop={5}
       marginBottom={5}
       fontFamily={'Bree Serif'}
       fontSize="17px"
     >
      <span className="hi">Hi  </span>
       Alaa Jamal
    </Typography> */}
           {/* Start */}
{/* 
           <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
     
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      {/* </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
       
      
      
      {/* </Box> */}
    {/* </Box> */} 







           {/* End */}


           {/* Start Tab  */}

           <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      
      <Tabs
        className="tabs"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Profile"
        className="tab"
         {...a11yProps(0)}
         icon={<PersonIcon/>} />
        <Tab label="My Houses"
        className="tab"
        {...a11yProps(1)} 
        icon = {<HomeIcon/>} />
        <Tab label="Favorite"
        className="tab"
       icon ={<FavoriteIcon/>} 
        {...a11yProps(2)} />
        <Tab label="Add new House"
        className="tab" 
        icon={<AddCircleIcon/>}
        {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
       <UserProfile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    
    </Box>

           {/* End Tab  */}
            






















   
   

        </section> 
      </section>
    </>
  );
};

export default Profile;




{/* <Box
sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
>
<Tabs 
  className="drawer"
  orientation="vertical"
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs example"
  sx={{ borderRight: 1, borderColor: 'divider' }}
>
 
 <Typography
      variant="h6"
      component="h6"
      color="#FFFFFF"
      textAlign="center"
      marginTop={5}
      marginBottom={5}
      fontFamily={'Bree Serif'}
      fontSize="17px"
    >
      <span className="hi">Hi  </span>
       Alaa Jamal
    </Typography>

   
      
  <Tab  className="tab" label="Profile" {...a11yProps(0)}  /> 
  <Tab className="tab" label="My Houses" {...a11yProps(1)} />
  <Tab className="tab" label="Favorite" {...a11yProps(2)} />
  <Tab className="tab" label="Add New House" {...a11yProps(3)} />
</Tabs>
  <TabPanel value={value} index={0}>
  

</TabPanel> 
<TabPanel value={value} index={1}>
<section className="MyProfile">
  <Box
component="form"


sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>
  <section className="profile-form">
  <TextField   value="Alaa Jamal" variant="outlined" />
<TextField   value="**********" variant="outlined" />
<TextField   value="alaa99702@gmail.com" variant="outlined" />
<TextField   value="+972592813281" variant="outlined" />

  </section>


</Box>
  </section>
   

</TabPanel> 
<TabPanel value={value} index={2}>
<section className="profile-form">
  <TextField   value="Alaa Jamal" variant="outlined" />
<TextField   value="**********" variant="outlined" />
<TextField   value="alaa99702@gmail.com" variant="outlined" />
<TextField   value="+972592813281" variant="outlined" />

  </section>

</TabPanel>
<TabPanel value={value} index={3}>
  Item Four
</TabPanel> */}

// </Box> 
