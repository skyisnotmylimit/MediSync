import React, { useState } from "react";
import Logo from "./Logo";
import Box from "./Box";
import TextButton from "./TextButton";
import { Button, Space } from "antd";

const Sidebar = ({
  height,
  display,
  gridTemplateRows,
  position,
  backgroundColor,
  color,
  padding,
  width,
}) => {
  const arr = [
    
      // <Button type="primary">Emergency</Button>,
      // <Button type="primary">Text</Button>,<Button type="primary">Text</Button>,
      // <Button type="primary">Logout</Button>,
    
    <TextButton
      backgroundColor="#0955b5"
      color="white"
    //   padding="10px"
      margin="5px"
      text="Emergency"
      key="emergency"
    />,
    <TextButton
      backgroundColor="#0955b5"
      color="white"
    //   padding="10px"
      margin="5px"
      text="Hospital Info"
      key="text1"
    />,
    <TextButton
      position="relative"
      backgroundColor="#0955b5"
      color="white"
    //   padding="10px"
      margin="5px"
      text="Contact us"
      key="text2"
    />,
    <TextButton
      backgroundColor="#0955b5"
      color="white"
    //   padding="10px"
      margin="5px"
      text="Logout"
      key="logout"
      />
  ];
  return (
    <div
      style={{
        height,
        display,
        gridTemplateRows,
        position,
        backgroundColor,
        color,
        padding,
        width,
        boxShadow : "5px 0px 6px 0px gray"
      }}
    >
      <Logo
        background="url('https://i.ibb.co/z8QTMnh/Logo.jpg')"
        backgroundRepeat="no-repaet"
        backgroundSize="contain"
        backgroundPositionX="center"
        height="100px"
        width="100px"
        borderRadius="50px"
        marginLeft="37px"
      />
      {/* <Space direction="vertical" style={{ width: '105%' }}>
      <Button type="primary">Primary Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="primary">Primary Button</Button>
      </Space> */}

      <Box
        display="grid"
        gridTemplateRows="repeat( 4, 1fr)"
        marginTop="80px"
        childComponents={arr}
      />
    </div>
  );
};

export default Sidebar;
