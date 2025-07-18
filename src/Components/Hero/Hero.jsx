import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>The place for a better education for a better WORLD</h1>
        <p>
          Whether you're a complete beginner or looking to sharpen your skills,
          EDUSITY Academy is your launchpad to mastering programming. We offer
          hands-on lessons, real-world projects, and expert guidance to help you
          become a confident developer.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
