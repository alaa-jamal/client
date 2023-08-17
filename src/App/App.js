
import React from 'react';
import {Layout, Landing,Details,AboutUs, NotFound} from '../Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Layout>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
   

      </Router> */}

      <Landing/>
      {/* <Details/> */}
     
      
    
      
    </Layout>
    
    
  );
}

export default App;
