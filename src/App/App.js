
import React from 'react';
import {Layout, Landing,Details,AboutUs, NotFound,Filter,Profile} from '../Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from '../Pages/Profile/UserProfile';



function App() {
  return (
    <Layout>
{/*     
         <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path ="/details/:id" element ={<Details/>}/>
          <Route path ="/filter" element ={<Filter/>}/> 
          <Route path ="*" element={<NotFound/>}/>
        </Routes>  */}

  

        <Profile/>

      {/* <Landing/> */}
      {/* <Details/> */}
     
      
    
      
    </Layout>
    
    
  );
}

export default App;
