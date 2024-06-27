import React from "react";
import ImageSlider from "../ImageSlider"
import { Link } from "react-router-dom";
import BannerImage from "../assets/lightblue1.png";
import "../style/Home.css";
import { TextField } from "@mui/material";
import Square from "../helpers/Square"
import AnimatedTextImage from "../helpers/AnimatedTextImage";
import imgPW from "../assets/pw_framework.png"
import imgSE from "../assets/SeleniumTraining.png"
import imgMob from "../assets/appium.png"
import imgApi from "../assets/rest_assured.png"

const text1=["one", "two", "three"]


//<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
function Home() {
  return (
<div>
    <div className="home">
    <div className="homeTop">
    </div>
      <div className="homeBottom" style={{ color: 'white' }}>
        Play Website
   </div>    
    </div>
    </div>
  );
}

export default Home;
