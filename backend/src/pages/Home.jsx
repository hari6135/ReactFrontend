import React from "react";
//import { Link } from "react-router-dom";
import "../styles/Home.css";
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
  
function Home() {
  const navigate=useNavigate();

  return (
    <>
    <motion.div className="home"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}   
    >
      <div className="headerContainer">
        <h1>Let the game begin</h1>
        <p>Your guide to the universe of games</p>
          <button className="gamecatlog" onClick={() => navigate('/menu')}> Games Catalog </button>
      </div>
    </motion.div>
    </>
  );
}

export default Home;