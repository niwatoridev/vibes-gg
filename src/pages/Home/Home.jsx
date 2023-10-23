import './Home.css';
import { useEffect, useRef, useState } from 'react';
import TransparentNavBar from '../../components/NavBar/TransparentNavBar';
import NavBar from '../../components/NavBar/NavBar';
import downArrow from '../../media/downArrow.png'
import { HashLink } from 'react-router-hash-link';
import ExpandingCards from '../../components/ExpandingCards/ExpandingCards';
import AboutUs from '../../components/AboutUs/AboutUs';
import VideoHeader from '../../components/VideoHeader/VideoHeader';
import ContactUs from '../../components/ContacUs/ContactUs';



function Home() {

const [navIsTransparent, setNavIsTransparent] = useState(true)
const videoRef = useRef();

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
        <div id='home'></div>
        <div ref={videoRef} className='detectorNav'></div>
        <VideoHeader></VideoHeader>
        <HashLink to="#aboutUs" smooth><img src={downArrow} className='downArrow' id='downArrowAboutUs' alt="downArrow" /></HashLink>
      </div>
      <div className='body'>
        <div id='aboutUs'></div>
        <AboutUs></AboutUs>
        <div id='projects'></div>
          <ExpandingCards></ExpandingCards>
        <div id='contactUs'>
          <ContactUs></ContactUs>
        </div>
      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default Home;
