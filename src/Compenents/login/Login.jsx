import React from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const validateGstNumber = (gstNo) => {
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return regex.test(gstNo);
};

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gstNo = e.target.gst.value;
    const password = e.target.password.value;
    const data = {
      gstNo,
      password,
    };

    if (!validateGstNumber(gstNo)) {
      alert("Invalid GST Number");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", data);
      localStorage.setItem("token", response.data.token);
      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Server error:", error.response.data);
        alert("Login failed: " + error.response.data.message);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Network error:", error.request);
        alert("Network error: Please check your internet connection.");
      } else {
        // Something else happened
        console.error("Error:", error.message);
        alert("An error occurred: " + error.message);
      }
    }
  };

  const Img = "https://svgshare.com/i/nDi.svg";
  return (
    <section className="login section" id="login">
      <div className="login__container container grid">
        <div className="login__content">
          <div className="loginImg">
            <img src={Img} alt="Picture" />
          </div>
        </div>

        <div className="login__content">
          <div className="login__content-box">
            <h2 className="login__title">Log In</h2>
            <span className="register__subtitle">
              New to Creative Ease? <Link to="/Register">Sign up here</Link>
            </span>
            <form className="login__form" onSubmit={handleSubmit}>
              <label className="login__form-tag">GST No</label>
              <input
                type="text"
                name="gst"
                placeholder="Enter the GST number"
                className="login__input-data"
                autoComplete="username"
                required
              />
              <label className="login__form-tag">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter the password"
                className="login__input-data"
                autoComplete="current-password"
                required
              />

              <a href="#" className="login__forget-title">
                Forget Password
              </a>
              <div className="button__container">
                <button className="button button--flex">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
