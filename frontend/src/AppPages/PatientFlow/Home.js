import React from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../AppComponents/Logo";
import Title from "../../AppComponents/Title";
import Subtitle from "../../AppComponents/Subtitle";
import "./Styles/Homestyles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Logo
            background="url('https://i.ibb.co/z8QTMnh/Logo.jpg')"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
            height="120px"
            width="120px"
            borderRadius="60px"
          />
        </div>
        <Link to="/signup" className="get-started">
          <Button type="primary"> Get Started </Button>
        </Link>
      </div>

      <div className="box">
        <div className="column1">
          <Title
            color="white"
            className="title"
            Text="MediSync, Sync your health"
          />
          <Subtitle
            color="white"
            className="sub-title"
            text="Welcome to the future of healthcare scheduling! "
          />

          <div
            className="body"
            style={{
              color: "white",
            }}
          >
            Experience the convenience of modern healthcare management. Join
            thousands of satisfied patients who have made the switch to our
            Doctor Appointment Management System. Your health, your schedule,
            your way.
          </div>

          <div className="buttons">
            <Link to="/signup" style={{ marginRight: "12px" }}>
              <Button type="primary"> Signup</Button>
            </Link>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>

        <div className="column2"></div>
      </div>
    </div>
  );
};

export default Home;
