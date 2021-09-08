import React, {useState} from 'react'
import Dropdown from './components/Dropdown.js';
import Footer from './components/Footer/index.js';
import Hero from './components/Hero.js';
import InfoSection from './components/InfoSection.js';
import Navbar from './components/Navbar.js'
import { InfoData } from './data/InfoData.js';
import { SliderData } from './data/SliderData.js';
import GlobalStyle from './globalStyle.js';


function App() {

   const [isOpen, setIsOpen] = useState(false)
   
   const toggle = () => {
      setIsOpen(!isOpen)
   }

  return (
     <>
        <GlobalStyle />
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderData} />
        <InfoSection {...InfoData} />
        <Footer />
    </>
  );
}

export default App;
