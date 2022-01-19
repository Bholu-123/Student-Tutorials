import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import { CourseSsc } from "./Components/CourseSsc";

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Banner/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/SSC" exact component={CourseSsc} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;