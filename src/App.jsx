import React, { createRef } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Missions from './components/Missions';
import Services from './components/Services';
import Industries from './components/Industries';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import ContactUsSection from './components/contactus';
import AboutUsSection from './components/AboutUs';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const introRef = createRef();
  const missionsRef = createRef();
  const servicesRef = createRef();
  const industriesRef = createRef();
  const technologiesRef = createRef();
  const aboutUsRef = createRef();
  const contactUsRef = createRef();





  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <ToastContainer />

      <Header scrollToRef={scrollToRef} introRef={introRef} missionsRef={missionsRef} servicesRef={servicesRef} industriesRef={industriesRef} technologiesRef={technologiesRef} aboutUsRef={aboutUsRef} contactUsRef={contactUsRef} />
      <Intro ref={introRef} scrollToRef={scrollToRef} ref2={contactUsRef} />
      <Missions ref={missionsRef} />
      <Services ref={servicesRef} />
      <Industries ref={industriesRef} />
      <Technologies ref={technologiesRef} />
      <AboutUsSection ref={aboutUsRef} />
      <ContactUsSection ref={contactUsRef} />
      <Footer scrollToRef={scrollToRef} introRef={introRef} missionsRef={missionsRef} servicesRef={servicesRef} industriesRef={industriesRef} technologiesRef={technologiesRef} aboutUsRef={aboutUsRef} contactUsRef={contactUsRef} />
    </div>
  );
};

export default App;
