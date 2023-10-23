import './Home.css';
import { useEffect, useRef, useState } from 'react';
import headerVideo from "./media/header-video.mp4"
import TransparentNavBar from '../../components/NavBar/TransparentNavBar';
import NavBar from '../../components/NavBar/NavBar';

import downArrow from '../../media/downArrow.png'

import { HashLink } from 'react-router-hash-link';
import ExpandingCards from '../../components/ExpandingCards/ExpandingCards';
import AboutUs from '../../components/AboutUs/AboutUs';



function Home() {

const videoHeader = useRef(null)
const [navIsTransparent, setNavIsTransparent] = useState(true)
const videoRef = useRef();
const homeRef = useRef();


const attemptPlay = () => {
  videoHeader && 
  videoHeader.current &&
  videoHeader.current.play().catch(error => console.error("Error attempting to autoplay Header Video", error))
}

useEffect(() => {
  attemptPlay();
}, []);

useEffect(()=>{
const observer = new IntersectionObserver((entries)=>{
  const entry = entries[0];

  setNavIsTransparent(entry.isIntersecting)
})
observer.observe(videoRef.current)
}, [])



  return (
    <div className="App">
      <div className='navBar'>
        {navIsTransparent ? <TransparentNavBar/> : <NavBar/>}
      </div>
      <div className='header'>
        <div ref={homeRef} id='home'></div>
        <div className='videoContainer'>
          <div ref={videoRef} className='detectorNav'></div>
          <video ref={videoHeader} src={headerVideo} loop muted alt="Header Video" id='headerVideo'></video>
          <HashLink to="#aboutUs" smooth><img src={downArrow} className='downArrow' id='downArrowAboutUs' alt="downArrow" /></HashLink>
        </div>
      </div>
      <div className='body'>
        <div id='aboutUs'></div>
          <AboutUs></AboutUs>
        <div className='projectsContainer' id='projects'>
          <h1>Proyectos</h1>
          <ExpandingCards></ExpandingCards>
        </div>
        <div className='contactContainer' id='contactUs'>

          <h1>Contacto</h1>
          
        </div>
      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default Home;
