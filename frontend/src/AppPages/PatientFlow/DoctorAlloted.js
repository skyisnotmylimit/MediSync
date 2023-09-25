import React from "react";
import "./Styles/DoctorAllotedstyles.css";
import { Button } from "antd";

const DoctorAlloted = () => {
  return (
    <div className="info-container1">
      <div className="row-1">
        <i class="ri-user-line"></i>
        <div className="doctor-info">
          <h3>Dr. Abhinav Gupta</h3>
          <span>Chief Cardiologist</span>
        </div>
      </div>
      <div className="row-2">
        <h4>Slot Allocated</h4>
        <span>10:30AM - 1:30PM</span>
      </div>
      <div className="row-3">
        <Button type="primary">Update</Button>
        <Button type="primary" className="field-name">
          Re-check your Medical Info
        </Button>
      </div>
    </div>
  );
};

export default DoctorAlloted;
