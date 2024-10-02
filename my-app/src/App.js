import NavBar from './components/NavBar';
import Landing from './components/LandingCom';
import Services from './components/Services';
import Rapidscat from './components/OurMission';
import Footer from './components/Footer';

import SateliteOne from './assets/satelite1.jpg';
import SateliteTwo from './assets/satelite2.jpg';

export default function App() {
  return(
    <div>
      <NavBar />
      <Landing />
      <Services />
      <Rapidscat reverse={true} img={SateliteOne} header="Rapidseat"/>
      <Rapidscat reverse={false} img={SateliteTwo} header="Rapidseat"/>
      <Footer />
    </div>
  )
}