import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Faculty from './Components/Faculty';
import Login from './Components/Login';
import AllTestimonials from './Components/AllTestimonials';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/faculty" exact component={Faculty} />
        <Route path="/login" exact component={Login} />
        <Route path="/allTestimonials" exact component={AllTestimonials} />
      </Switch>
    </Router>
  );
}

export default App;