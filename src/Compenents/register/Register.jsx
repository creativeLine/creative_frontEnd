import React from "react";
import Img from "../../Assets/login2-removebg.png";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const validateGstNumber = (gstNo) => {
  var regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  return regex.test(gstNo);
};

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const company = e.target.company.value;
    const password = e.target.password.value;
    const pan = e.target.pan.value;
    const gstNo = e.target.gst.value;
    const msmeId = e.target.msme.value;
    const roles = "ADMIN";

    const data = {
      company,
      password,
      pan,
      gstNo,
      msmeId,
      roles,
    };

    // if (!validateGstNumber(gstNo)) {
    //   alert("Invalid GST number");
    //   return;
    // }
    try {
      const response = await axios({
        url: "http://169.254.75.170:8080/auth/sign-up",
        method: "POST",
        data: data,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      if (response.data.status === "success") {
        navigate("/home");
      }
    } catch (error) {
      alert("An error occurred: " + error);
    }
  };

  return (
    <section className="register section" id="register">
      <div className="register__container container grid">
        <div className="register__content">
          <img src={Img} className="registerImg" alt="Picture" />
        </div>

        <div className="register__content">
          <div className="register__content-box">
            <h2 className="register__title">Get Started</h2>
            <span className="register__subtitle">
              Already Have an account? <Link to="/Login">login</Link>
            </span>
            <form className="register__form" onSubmit={onSubmit}>
              <label className="register__form-tag">Company name</label>
              <input
                type="text"
                name="company"
                placeholder="Enter the Company name"
                className="register__input-data"
                required
              />
              <label className="register__form-tag">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter the password"
                className="register__input-data"
                autoComplete="current-password"
                required
              />
              <label className="register__form-tag">GST No</label>
              <input
                type="text"
                name="gst"
                placeholder="Enter the GST number"
                className="register__input-data"
                required
              />
              <label className="register__form-tag">Pan No</label>
              <input
                type="text"
                name="pan"
                placeholder="Enter the Pan number"
                className="register__input-data"
                required
              />
              <label className="register__form-tag">MSMEID</label>
              <input
                type="text"
                name="msme"
                placeholder="Enter the MSMEID"
                className="register__input-data"
                required
              />

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

export default Register;
