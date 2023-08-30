import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Layout,
  Landing,
  Details,
  AboutUs,
  NotFound,
  Filter,
  Profile,
} from "./Pages";
import LoginPopup from "./Components/LoginPopup";
import SignPopup from "./Components/SignUp";
import PrivateRoute from "./Components/Route/PrivateRoute";
import PublicRoute from "./Components/Route/PublicRoute";
import AuthProvider from "./Components/Context/Authrization";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route exact path="/" element={<PublicRoute />}>
            <Route exact path="/LoginPopup" element={<LoginPopup />} />
            <Route exact path="/SignPopup" element={<SignPopup />} />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/Profile" element={<Profile />} />
          </Route>
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/filter" element={<Filter />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
