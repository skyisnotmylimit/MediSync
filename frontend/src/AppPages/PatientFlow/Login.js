import React from "react";
import "./Styles/Loginstyles.css";
import {} from "antd";
import { Link,useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../../AppComponents/Logo";
import axios from "axios";
//import FormItem from "antd/es/form/FormItem";
const LoginPage = () => {
  const navigate=useNavigate();
  const url = 'https://medi-sync-api.vercel.app/login';
  const onFinish = async(values) => {
    // console.log("Received values of form: ", values);
    const sendData = {
      username : values.username,
      password : values.password
    }
    try {
      const response = await axios.post(url, sendData);
      // Handle the response here
      console.log('Response:', response.data);
      // alert(response.code.message);
      if(response.data.code === 1)
      {
        navigate('/patient-dashboard');
      }
      else if(response.data.code === 0){
        alert(response.data.message);
      }
      else if(response.data.code === 2){
        alert(response.data.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    }
    
  };
  return (
    <>
      <div className="form-container">
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
          name="normal_login"
          className="login-form"
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

            <Link to="/" className="login-form-forgot">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
