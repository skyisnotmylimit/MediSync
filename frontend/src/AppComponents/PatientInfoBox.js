import React, { useState } from "react";
import "../AppPages/PatientFlow/Styles/Infostyles.css";
import { Button } from "antd";
// import EditIcon from "./EditIcon";
// import CloseIcon from "./CloseIcon";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

const PatientInfoBox = () => {
  //   const [isUserId, setIsUserId] = useState("adf235shjka");

  //   const thisIsUserId = () => {
  //     setIsUserId("");
  //   };

  //   const styles = {
  //     display: isSymptom ? "none" : "inline",
  //   };
  const userData = {
    name: "Vaishali",
    dob: "14-03-2004",
    gender: "Female",
    phoneNumber: "8851463032",
    symptoms: ["chest pain"],
    bloodGroup: "B+ve",
    height: "157cm",
    weight: "50kg",
    uniqueId: "adf235shjka",
  };

  const symptomTagStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const objectData = Object.entries(userData);

  return (
    <div className="info-container">
      <div className="row1">
        {objectData.map(([key, value]) => (
          <div
            className="field"
            style={{ display: value === userData.symptoms ? "none" : "flex" }}
          >
            {value === userData.uniqueId ? "Unique Identification" : ""}
            {value != userData.uniqueId && value != userData.symptoms
              ? `${value}`
              : ""}
          </div>
        ))}
      </div>
      <div className="row2">
        <div className="field">
          Symptoms<i class="ri-arrow-down-line"></i>
        </div>
        <div className="field">
          Patient History
          <Checkout />
        </div>
      </div>
      <div className="row3">
        {userData.symptoms.map((key, element) => (
          <Button
            ghost
            type="text"
            key={key}
            className="tag"
            style={symptomTagStyle}
          >
            {`${userData.symptoms[element]}`}
          </Button>
        ))}
      </div>
      <div className="row3">
        <Button type="primary" style={{ marginRight: "10px" }}>
          <Link to="/doctor-alloted">Allocated Doctor Info</Link>
        </Button>
      </div>
    </div>
  );
};

export default PatientInfoBox;
