import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.png";
import "../style/Home.css";

function Home() {
  return (
<div>
    <div className="home">
      <div
        className="homeTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="homeBottom">
        <h1> SKILL UP TEST </h1>
        <p>
        Welcome to SkillUpTest: Your Hub for Testing Tools and Skills
        </p>
        <p>
        At SkillUpTest, we empower software testers with the latest tools and comprehensive training 
        to excel in their careers. Our platform offers a curated selection of top-tier testing tools 
        and expert-led courses designed to enhance your skills and knowledge. Join us to stay ahead 
        in the dynamic world of software testing.
        </p>
        <p>
        Why Choose SkillUpTest?
        </p>
        <p>
        Expert Guidance: Learn from industry leaders with extensive experience in software testing.
        Cutting-Edge Tools: Access the best testing tools that are widely used in the industry.
        Comprehensive Courses: Our courses cover everything from basics to advanced testing techniques.
        Community Support: Join a thriving community of testers to share knowledge and grow together.
        </p>
        <Link to="/menu">
          <button> TRAINING PROGRAMME </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;
