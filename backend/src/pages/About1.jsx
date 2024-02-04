import React from "react";
import "../styles/About1.css";
import {motion} from 'framer-motion';

function About() {
  return (
    <motion.div className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div
        className="aboutTop"></div>
      <div className="aboutBottom">
        
      </div>
    </motion.div>
  );
}

export default About;