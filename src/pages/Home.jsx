import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Property from "../components/Properties";
import Featured from "../components/Featured";
import Banner from "../components/Banner";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <About />
      <Property />
      <Featured />
      <Banner />
      <Destinations />
      <Testimonials />
    </div>);
};

export default Home;
