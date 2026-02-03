import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from "./component/NavBar"
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Feedback from "./component/Feedback";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import CarSlider from "./slider/CarSlider";
import Footer from "./component/Footer";

function App() {
  return(
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Normal User Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Route */}
      
      </Routes>

      <CarSlider />
      <Footer />
    </BrowserRouter>
  )
}

export default App;

