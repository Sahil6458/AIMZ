// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Missions from './components/Missions';
import ServicesSection from './components/Services';
import IndustriesSection from './components/Industries';
import Technologies from './components/Technologies';
import ContactUsSection from './components/contactus';
import Footer from './components/footer';
import AboutUsSection from './components/AboutUs';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Missions />
      <ServicesSection />
      <IndustriesSection />
      <Technologies />
      <AboutUsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default App;
