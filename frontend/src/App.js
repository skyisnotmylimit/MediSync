import React from "react";
import "./App.css";
import Home from "./AppPages/PatientFlow/Home";
import Signup from "./AppPages/PatientFlow/Signup";
import Login from "./AppPages/PatientFlow/Login";
import PatientDashboard from "./AppPages/PatientFlow/PatientDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientLivePass from "./AppPages/PatientFlow/PatientLivePass";
import DoctorAlloted from "./AppPages/PatientFlow/DoctorAlloted";
// import { Footer } from "antd/es/layout/layout";
// import Navbar from "./AppComponents/Navbar"

function App() {
  return (
    <BrowserRouter>
      {/* <div>
      <Navbar/>
     </div> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/patient-dashboard" element={<PatientDashboard />}></Route>
        <Route path="/live-pass" element={<PatientLivePass />} exact></Route>
        <Route path="/doctor-alloted" element={<DoctorAlloted/> } exact></Route>
      </Routes>
      {/* <div> */}
      {/* <Footer/> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
