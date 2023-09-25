import React, { useEffect, useState } from "react";
import "../AppPages/PatientFlow/Styles/Infostyles.css";
import { Button } from "antd";
import EditIcon from "./EditIcon";
import CloseIcon from "./CloseIcon";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import axios from "axios";

const PatientInfo = () => {
  const [isEditing, setIsEditing] = useState({
    Name: false,
    DOB: false,
    Gender: false,
    Phone_Number: false,
    Symptoms: false,
    Blood_Group: false,
    Height: false,
    Weight: false,
  });

  // console.log(isEditing)
  const [buttonStyles, setButtonStyles] = useState({
    color: "white",
    backgroundColor: "gray",
    marginRight: "10px",
  });
  const [textStyles, setTextStyles] = useState({
    color: "gray",
  });

  
  const textStylesChange = () => {
    setTextStyles({
      color: "black",
    });
  };

  let userData = {
    Name: "Field empty",
    DOB: "Field empty",
    Gender: "Field empty",
    Phone_Number: "Field empty",
    Symptoms: [],
    Blood_Group: "Field empty",
    Height: "Field empty",
    Weight: "Field empty",
  };

  // const [ fetchedData , setFetchedData ] = useState({});
  // useEffect(()=>{
  //   // GET userData
  //   fetchedData ={}
  // })

  const [inputValue, setInputValue] = useState(userData);
  const objectData = Object.entries(inputValue);
  // console.log(objectData);

  const handleInputChange = (key, newValue) => {
    setInputValue({
      ...inputValue,
      [key]: newValue,
    });
    // console.log( objectData);
    // console.log(inputValue);
  };

  const updateInfo = async () => {
    userData = inputValue;
    // POST this userData
    console.log(userData);
    const url = "http://localhost:8080/patient-dashboard";
    try {
      const response = await axios.post(url, userData)
      console.log("Response:", response.data);
      alert(response.data.message + " Successfully saved");
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    }
    setIsEditing({
      Name: false,
      DOB: false,
      Gender: false,
      Phone_Number: false,
      Symptoms: false,
      Blood_Group: false,
      Height: false,
      Weight: false,
    });
    const showSaveButton = () => {
      // console.log(isEditing);

      const objd = Object.entries(isEditing);
      // console.log(objd);
      for (let i = 0; i < objd.length; i++) {
        if (objd[i][1] == true) return true;
      }
      return false;
    };
    const buttonStylesChange = () => {
      setButtonStyles({
        color: "white",
        backgroundColor: "#1677ff",
        marginRight: "10px",
      });
    };
    buttonStylesChange();
    showSaveButton();
  };
  const letEditingBegin = () => {
    setIsEditing({
      Name: true,
      DOB: true,
      Gender: true,
      Phone_Number: true,
      Symptoms: true,
      Blood_Group: true,
      Height: true,
      Weight: true,
    });
  };
  const showSaveButton = () => {
    // console.log(isEditing);

    const objd = Object.entries(isEditing);
    // console.log(objd);
    for (let i = 0; i < objd.length; i++) {
      if (objd[i][1] == true) return true;
    }
    return false;
  };

  // console.log(inputValue.Symptoms);
  const [isClose, setIsClose] = useState(false);

  const toggleSymptom = () => {
    setIsClose(!isClose);
  };

  return (
    <div className="info-container">
      <div className="row1">
        {objectData.map(([key, value]) =>
          !isEditing[key] ? (
            <div
              className="field"
              onClick={() => setIsEditing({ ...isEditing, [key]: true })}
              style={{
                display: value === inputValue.Symptoms ? "none" : "flex",
                color:
                  value === "Field empty" || value.length === 0
                    ? "gray"
                    : "black",
              }}
            >
              {value != inputValue.Symptoms ? `${value}` : ""}
              <EditIcon
              // onClick={() => setIsEditing({ ...isEditing, [key]: true })}
              />
            </div>
          ) : (
            <input
              type="text"
              className="field"
              key={key}
              id={key}
              placeholder={key}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                display: value === inputValue.Symptoms ? "none" : "flex",
                color:
                  value === "Field empty" || value.length === 0
                    ? "gray"
                    : "black",
              }}
            />
          )
        )}
      </div>
      <div className="row2">
        <select
          className="field"
          id="Symptoms"
          name="Symptoms"
          style={textStyles}
          onChange={(value) => inputValue.Symptoms.push(value.target.value)}
        >
          <option value="Symptoms" selected>
            Symptoms
          </option>
          <option value="excessive sweating">excessive sweating</option>
          <option value="chest pain">chest pain</option>
          <option value="ankle swelling">ankle swelling</option>
          <option value="shortness of breath">shortness of breath</option>
        </select>
        <div className="field" style={textStyles}>
          Patient History <Checkout />
        </div>
      </div>
      <div className="row3">
        {inputValue.Symptoms.map((key, element) => (
          <Button
            ghost
            type="text"
            key={key}
            className="tag"
            style={{
              display: inputValue.Symptoms[element].isClose ? "none" : "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.781)",
              padding: "1px",
            }}
            onClick={toggleSymptom}
          >

            <CloseIcon />
            {`${inputValue.Symptoms[element]}`}
          </Button> 
        ))}
      </div>
      <div className="row3">
        <Button type="primary" style={buttonStyles}>
          <Link to="/live-pass">Generate Live Patient Pass</Link>
        </Button>
        {showSaveButton() ? (
          <Button type="primary" onClick={updateInfo}>
            Save
          </Button>
        ) : (
          <Button type="primary" onClick={letEditingBegin}>
            Edit Profile Info
          </Button>
        )}
      </div>
    </div>
  );
};

export default PatientInfo;
