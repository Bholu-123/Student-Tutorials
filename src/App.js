import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import { CourseSsc } from "./Components/CourseSsc";
import GalleryClasses from "./Components/GalleryClasses";
import GalleryCelebrations from "./Components/GalleryCelebrations";
import GalleryEvents from "./Components/GalleryEvents";
import GalleryContainer from "./Components/GalleryContainer";
import CourseJunior from "./Components/CourseJunior";
import Contact from "./Components/Contact";

const App = () => {
  
  return (
    <Router>
      <Navigation />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={GalleryContainer} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/SSC" exact component={CourseSsc} />
        <Route path="/ClassroomGallery" exact component={GalleryClasses} />
        <Route path="/EventsGallery" exact component={GalleryEvents} />
        <Route
          path="/CelebrationsGallery"
          exact
          component={GalleryCelebrations}
        />
        <Route path="/:id" exact component={CourseJunior} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;