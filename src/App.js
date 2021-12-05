import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Faculty from './Components/Faculty';
import Login from './Components/Login';
import Banner from './Components/Banner';
import DetailsCardWrapper from './Components/DetailsCardWrapper';
import CarouselTestimonial from "./Components/CarouselTestimonial";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/login" component={Login} />
      </Routes>
      <Banner/>
      <DetailsCardWrapper/>
      <CarouselTestimonial/>
    </Router>
  );
}

export default App;