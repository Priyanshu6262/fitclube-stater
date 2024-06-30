import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NummberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {

  const transtion = {type: 'spring', duration : 3}
  const mobile = window.innerHeight<=768 ? true : false;
  return (
    <div className='hero' id='hero'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>

         {/* the best ad */}   

        <div className="the-best-ad">
            <motion.div
             initial={{left: mobile? '165px': '238px'}}
             whileInView={{left: '8px'}}
             transition={{...transtion, type: 'tween'}}
            
            
            ></motion.div>
            <span>the best fitness clube in the town</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
                <span>
                In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
            </div>
        </div>

        {/* Figures */}
        <div className="figures">
            <div>
                <span>
                  <NummberCounter end={140} start={100} delay='5'
                  preFix='+'/>
                </span>
                <span>expert coachs</span>
            </div>
            <div>
                <span>
                <NummberCounter end={987} start={800} delay='7'
                  preFix='+'/>
                </span>
                <span>members joined</span>
            </div>
            <div>
                <span>
                <NummberCounter end={90} start={50} delay='5'
                  preFix='+'/>
                </span>
                <span>fitness programs</span>
            </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>

      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transtion} 
            className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Reate</span>
            <span>116 bpm</span>
        </motion.div>

        {/* hero image */}
        <img src={hero_image} className='hero-image'/>
        <motion.img
        initial={{right:'12rem'}}
        whileInView={{right:'22rem'}}
          transition={transtion}
          src={hero_image_back} className='hero-image-back' />

        {/* calories */}
        <motion.div
        initial={{right:'40rem'}}
        whileInView={{right:'30rem'}} 
            transition={transtion}
            className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
