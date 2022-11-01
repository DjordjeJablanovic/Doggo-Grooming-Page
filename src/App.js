import React from "react";
import HeroSlider from "./components/HeroSlider";
import Nav from "./components/Nav";
import Appointment from './components/Appointment'
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Nav/>
      <HeroSlider/>
      <Appointment/>
      <Prices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
