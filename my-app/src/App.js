import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from './components/NavBar';
import Landing from './components/LandingCom';
import Services from './components/Services';
import Rapidscat from './components/OurMission';
import Footer from './components/Footer';

import SateliteOne from './assets/satelite1.jpg';
import SateliteTwo from './assets/satelite2.jpg';


export default function App() {
  
  React.useEffect(()=> {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    })
  })

  return(
    <div>
      <NavBar />
      <Landing />
      <Services />
      <Rapidscat reverse={true} img={SateliteOne} header="Header One"/>
      <Rapidscat reverse={false} img={SateliteTwo} header="Header two"/>
      <Footer />
    </div>
  )
}