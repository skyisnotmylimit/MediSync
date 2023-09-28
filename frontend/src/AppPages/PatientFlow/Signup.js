import React from "react";
import "./Styles/Signupstyles.css";
import {} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../../AppComponents/Logo";
import axios from "axios";
//import FormItem from "antd/es/form/FormItem";
const Signup = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const url = "https://medi-sync-api.vercel.app/signup";
    const sendData = {
      username: values.username,
      password: values.password,
    };
    try {
      const response = await axios.post(url, sendData);
      // Handle the response here
      console.log("Response:", response.data);
      // alert(response.data.message + "Now click on Already a member");
      if (response.data.code) {
        navigate("/login");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="signup-form-container">
        <Logo
          background="url('https://i.ibb.co/z8QTMnh/Logo.jpg')"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPositionX="center"
          height="168px"
          width="170px"
          borderRadius="85px"
        />
        <Form
          name="normal_signup"
          className="signup-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign up
            </Button>
            Or <Link to="/login"> Already a member?</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Signup;
