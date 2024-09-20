import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import CustomCounter from '../CustomCounter';
import {motion} from 'framer-motion'
const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth=768 ? true: false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{ left: mobile? "125px": "250px"}}
          whileInView={{ left: '8px'}}
          transition={{...transition, type: 'tween'}}
          
          ></motion.div>
          <span>the best fitness club</span>
        </div>

        {/*  Hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Join us on a journey to sculpt your dream physique and elevate
              your lifestyle to its fullest potential
            </span>
          </div>
        </div>

        {/* figures*/}

        <div className="figures">
          <div>
            <span>

            <CustomCounter end={150} start={100} delay={20} prefix="+" />
            </span>
            <span>Expert FitFam</span>
          </div>
          <div>
            <span>
            <CustomCounter end={789} start={650} delay={8} prefix="+" /></span>
            <span>Fitness Gurus</span>
          </div>
          <div>
            <span>
            <CustomCounter end={50} start={26} delay={20} prefix="+" /></span>
            <span>Fitness Plans</span>
          </div>
        </div>

        {/* her button */}

        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>


        <motion.div 
        initial= {{ right: "-1rem" }}
        whileInView={{ right:"4rem" }}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>

        {/* hero image*/}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial= {{ right: "11rem" }}
        whileInView={{ right:"22rem" }}
        transition={transition}
        
        img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <motion.div 
        initial= {{ right: "37rem" }}
        whileInView={{ right:"28rem" }}
        transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
