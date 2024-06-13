import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Property from "./components/Properties";
import Featured from "./components/Featured";
import Banner from "./components/Banner";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom';

//import pages 
import Home from './pages/Home';
import PropertyDetails from "./pages/PropertyDetail";
import { useRef } from 'react';

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <Header />
      <Hero />
      {/* <Hero />
      <About />
      <Property />
      <Featured />
      <Banner />
      <Destinations />
      <Testimonials /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;