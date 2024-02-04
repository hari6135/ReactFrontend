import React, { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About1';
import { AnimatePresence } from 'framer-motion';
import Login from '../pages/LoginPage';
import AddDetails from '../pages/AddDetails';
import Main from '../pages/Main';
import ViewDetails from '../pages/ViewDetails';
import EditDetails from '../pages/EditDetails';
import Forget from '../pages/Forget';
import OtpForm from '../pages/OtpForm';


function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget/>} />
        <Route path="/main" element={<Main />} />

        <Route path='/otp' element={<OtpForm/>}/>
        <Route path="/addDetails" element={<AddDetails />} />
        <Route exact path="/data/:pid" element={<ViewDetails />} />
        <Route exact path="/edit/:pid" element={<EditDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;