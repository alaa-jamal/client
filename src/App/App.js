
import React from 'react';
import {Layout, Landing,Details,AboutUs, NotFound,Filter} from '../Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path ="/details/:id" element ={<Details/>}/>
          <Route path ="/filter" element ={<Filter/>}/>
          <Route path ="*" element={<NotFound/>}/>
         
        </Routes>
   

      </Router>

      {/* <Landing/> */}
      {/* <Details/> */}
     
      
    
      
    </Layout>
    
    
  );
}

export default App;
