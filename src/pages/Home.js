import React from "react";
import ImageSlider from "../ImageSlider"
import { Link } from "react-router-dom";
import BannerImage from "../assets/lightblue1.png";
import "../style/Home.css";
import { TextField } from "@mui/material";
import img1 from "../assets/se_framework.png"
import img2 from "../assets/pw_framework.png"
import img3 from "../assets/rest_assured.png"
import img4 from "../assets/appium.png"


function Home() {
  const images=[
    img1,img2,img3,img4
  ];
  return (
<div>

    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="homeTop">
      <div style={{padding: "10px"}}>
        <ImageSlider images={images}/>
      </div>
    </div>
      <div className="homeBottom">
        <h1 style={{ color: 'white' }}> SKILL-UP-TEST </h1>
        <h2>
        Welcome to SKILL-UP-TEST : Your Pathway to Test Automation Excellence
        </h2>
        <p>
        At SkillUpTest, we empower software testers with the latest tools and comprehensive training 
        to excel in their careers. Our platform offers a curated selection of top-tier testing tools 
        and expert-led courses designed to enhance your skills and knowledge. Join us to stay ahead 
        in the dynamic world of software testing.
        </p>
        <p>
        Why Choose SkillUpTest?
        </p>

        <li>
        Expert Guidance: Learn from industry leaders with extensive experience in software testing.
        </li>
        <li>
        Cutting-Edge Tools: Access the best testing tools that are widely used in the industry.
        </li>
        <li>
        Comprehensive Courses: Our courses cover everything from basics to advanced testing techniques.
        </li>
        <li>
        Community Support: Join a thriving community of testers to share knowledge and grow together.
        </li>

      </div>
    </div>
    </div>
  );
}

export default Home;
