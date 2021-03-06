import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import ImageBanner from "../utils/ImageBanner";
import img3 from "../../images/social_media_1.svg";
import img2 from "../../images/social_media_2.svg";
import img1 from "../../images/social_media_3.svg";

function SignUp() {
  var [count, setCount] = useState(0);
  var images = [
    <ImageBanner imageUrl={img1} alt="Manage all accounts from one place" />,
    <ImageBanner imageUrl={img2} alt="Generate report in a minute" />,
    <ImageBanner imageUrl={img3} alt="Develop common link to your accounts" />
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === -220) {
        setCount(0);
      } else {
        setCount(count - 110);
      }
      console.log("Counter :: " + count);
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="signup-container">
      <div className="signup-controls">
        <form>
          <div className="logo">
            <center>
              <h1>- Stage -</h1>
            </center>
          </div>
          <div className="signup-title">
            <h1>Create Your Account</h1>
          </div>
          <div>
            <TextField
              id="name"
              label="Name/Business Name"
              variant="outlined"
              size="small"
              fullWidth
              style={{fontSize:'16px'}}
            />
          </div>
          <div>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
              type="password"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel htmlFor="user-type-label">User Type</InputLabel>
              <Select
                native
                label="User Type"
                id="user-type"
                inputProps={{ name: "User Type", id: "user-type-label", fontSize: "10" }}
                
              >
                 <option value=""></option>
                <option value="Business">Business</option>
                <option value="Individual">Individual</option>
              </Select> 
            </FormControl>
            {/* <select>
              <option value="business">Business</option>
              <option value="individual">Individual</option>
            </select> */}

          </div>
          <div>
            <center>
              <Button
                id="signup"
                variant="contained"
                style={{ backgroundColor: "#F50057", color: "white" }}
              >
                Sign Up
              </Button>
            </center>
          </div>
          <div>
            <center>
              <Link to="/" className="link-to-login">Already have an account? click here</Link>
            </center>
          </div>
        </form>
      </div>
      <div className="signup-banner">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="banner-wrapper"
              style={{ transform: `translateX(${count}%)` }}
            >
              {image}
            </div>
          );
          // <img src={require("../../images/social_media_3.svg")} />
        })}
      </div>
    </div>
  );
}

export default SignUp;
