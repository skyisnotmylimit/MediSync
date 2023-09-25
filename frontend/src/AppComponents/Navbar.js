import React from "react";
import { Link } from "react-router-dom";
import "../AppPages/PatientFlow/Styles/Navbarstyles.css";

const Navbar = () => {
  return (
    <div className="nav-header">
      <Link className="link-name">Home</Link>
      <Link className="link-name">About us</Link>
      <Link className="link-name">Report</Link>
      <Link className="link-name">Doctors</Link>
      <Link className="link-name">Contact us</Link>
    </div>
  );
};

export default Navbar;
