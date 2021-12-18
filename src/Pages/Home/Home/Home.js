import React from 'react';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import Navigation from '../Navigation/Navigation';
import Properties from '../Properties/Properties';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
   return (
      <>
         <Navigation/>
         <HeroSection/>
         <Services/>
         <Properties/>
         <Testimonial/>
         <Footer/>
      </>
   );
};

export default Home;