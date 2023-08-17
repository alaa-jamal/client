
import React from 'react';
import {Layout, Landing,Details,AboutUs, NotFound} from '../Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// llll

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path ="/details" element ={<Details/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
   

      </Router>

      {/* <Landing/> */}
      {/* <Details/> */}
     
      
    
      
    </Layout>
    
    
  );
}

export default App;
