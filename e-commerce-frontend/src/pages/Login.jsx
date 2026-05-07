

import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  // State
  const [loginDetails, setloginDetails] = React.useState({
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setloginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = (e) => {

    e.preventDefault();

    console.log(loginDetails);

    toast.success("Login Successful");
  };

  // Reset Form
  const handleReset = () => {

    setloginDetails({
      username: "",
      email: "",
      password: "",
      otp: "",
    });
  };

  // Generate OTP Function
  const generatedOtp = async () => {

    try {

      // Generate 6 Digit OTP
      let otpValue = Math.floor(100000 + Math.random() * 900000);

      console.log("Generated OTP:", otpValue);

      // Expiry Time
      let time = new Date();

      let expiredTime = `${time.getHours()}:${time.getMinutes() + 15}:00`;

      // EmailJS Form Data
      let formData = {
        email: loginDetails.email,
        otp: otpValue,
        time: expiredTime,
      };

      // Send Mail
      await emailjs.send(
        "service_9oh39w8",
        "template_bs4vnv6",
        formData,
        {
          publicKey: "KWsSF1y7hqmsuNwKkT",
        }
      );

      toast.success("OTP Sent Successfully");

    } catch (err) {

      console.log(err);

      toast.error("Failed To Send OTP");
    }
  };

  return (

    <div id="Form-Container">

      <Form onSubmit={handleLogin}>

        {/* Username */}
        <Row className="my-2">

          <Form.Group>

            <Form.Label>Username:</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="username"
              onChange={handleChange}
              value={loginDetails.username}
            />

          </Form.Group>

        </Row>

        {/* Email */}
        <Row className="my-2">

          <Form.Group>

            <Form.Label>Email:</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={loginDetails.email}
            />

          </Form.Group>

        </Row>

        {/* Password */}
        <Row className="my-2">

          <Form.Group>

            <Form.Label>Password:</Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              value={loginDetails.password}
            />

          </Form.Group>

        </Row>

        {/* OTP Section */}
        <Row className="my-2">

          <Col>

            <Button
              type="button"
              className="btn btn-info"
              onClick={generatedOtp}
            >
              Generate OTP
            </Button>

          </Col>

          <Col>

            <Form.Control
              type="number"
              placeholder="Enter OTP"
              name="otp"
              onChange={handleChange}
              value={loginDetails.otp}
            />

          </Col>

        </Row>

        {/* Buttons */}
        <Row className="my-2">

          <Col>

            <Button
              type="submit"
              className="btn btn-success"
            >
              Login
            </Button>

          </Col>

          <Col>

            <Button
              type="reset"
              className="btn btn-warning"
              onClick={handleReset}
            >
              Reset
            </Button>

          </Col>

        </Row>

      </Form>

      {/* Toast Message */}
      <ToastContainer />

    </div>
  );
};

export default Login;
