import React from 'react';
//===== assets =====//
import '../../App.css';
//===== components =====//
import Banner from '../Banner/Banner';
import Advantages from '../Advantages/Advantages';
import About from '../About/About';
import Directions from '../Directions/Directions';
import Leader from '../Leader/Leader';
import Team from '../Team/Team';
import Consultation from '../Consultation/Consultation';
import MapComponent from '../MapComponent/MapComponent';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const TitlePage = () => {
  return (
    <main className='App'>
        <Navbar />
        <Banner id="main" />
        <Advantages />
        <About id="about" />
        <Directions id="services" />
        <Leader />
        <Team />
        <Consultation id="consultation" />
        <MapComponent />
        <Footer />
    </main>
  )
}

export default TitlePage