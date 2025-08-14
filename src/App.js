import React from 'react';
//===== components =====//
import Banner from './components/Banner/Banner';
import Advantages from './components/Advantages/Advantages';
import About from './components/About/About';
import Directions from './components/Directions/Directions';
import Leader from './components/Leader/Leader';
import Team from './components/Team/Team';
import Consultation from './components/Consultation/Consultation';
import MapComponent from './components/MapComponent/MapComponent';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
//===== assets =====//
import './App.css';

const App = () => {
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

export default App;