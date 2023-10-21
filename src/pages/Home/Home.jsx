import './Home.css';
import { useEffect, useRef, useState } from 'react';
import headerVideo from "./media/header-video.mp4"
import TransparentNavBar from '../../components/NavBar/TransparentNavBar';
import NavBar from '../../components/NavBar/NavBar';

function Home() {

const videoHeader = useRef(null)
const [navIsTransparent, setNavIsTransparent] = useState(true)
const myRef = useRef();

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
observer.observe(myRef.current)
}, [])


  return (
    <div className="App">
      <div className='navBar'>
        {navIsTransparent ? <TransparentNavBar/> : <NavBar/>}
      </div>
      <div className='header'>
        <div className='videoContainer'>
          <div ref={myRef} className='detector'></div>
          <video ref={videoHeader} src={headerVideo} loop muted alt="Header Video" id='headerVideo'></video>
        </div>
      </div>
      <div className='body'>

      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default Home;
