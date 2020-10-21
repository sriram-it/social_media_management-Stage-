import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import "./Login.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ImageBanner from "../utils/ImageBanner";

import img3 from "../../images/social_media_1.svg";
import img2 from "../../images/social_media_2.svg";
import img1 from "../../images/social_media_3.svg";

function Login() {

  var [count, setCount] = useState(0)

  useEffect(()=>{
    const timer = setInterval( ()=>{
        if(count === -100) {
            setCount(0)
        } else {
            setCount(count - 50)
        }
        console.log(count)
    }, 4000);
    return (()=>{
        clearInterval(timer);
    })
  }, [count])


  const images = [
    <ImageBanner imageUrl={img1} alt="Manage all accounts from one place" />,
    <ImageBanner imageUrl={img2} alt="Generate report in a minute" />,
    <ImageBanner imageUrl={img3} alt="Develop common link to your accounts" />
    ]
  return (
    <div className="login-container">
      <div className="login-actions-container">
        <form className="login-actions">
          <div className="login-logo">
            <h1>- Stage -</h1>
          </div>
          <div>
            <h2>Welcome back !!</h2>
          </div>
          <div>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div>
            <center>
              <Button style={{ backgroundColor: "#F50057", color: "white" }}>
                Login
              </Button>
            </center>
          </div>
          <div >
              <Link to="/signUp" className="link-to-signup">Are you a new user? click here</Link>
          </div>
        </form>
      </div>
      <div className="login-image-banner">
          <div className="login-image">
            {images.map((image, index) => {
                return <center><div key={index} className="image-holder" style={{transform: `translateX(${count}vw)`}}>{image}</div></center>
            })
            }
          </div>
      </div>
    </div>
  );
}

export default Login;
