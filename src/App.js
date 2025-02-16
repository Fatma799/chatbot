import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // استيراد Navigateimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from "./auth/Landing";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import ForgetPassword from "./auth/ForgetPassword";
import VerificationPage from "./auth/Verification";
import CreatePassword from "./auth/CreatePassword";
import Home from "./home/Home";

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Verification" element={<VerificationPage />} />
          <Route path="/CreatePassword" element={<CreatePassword />} />
          <Route path="/Home" element={isLoggedIn ? <Home/> : <Navigate to="/Login"/>} />


      </Routes>
    </Router>
  );
}

export default App;
