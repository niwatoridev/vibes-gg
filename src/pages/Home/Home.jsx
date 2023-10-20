import './Home.css';
import { useEffect, useRef } from 'react';
import headerVideo from "./media/header-video.mp4"
import NavBar from '../../components/NavBar/NavBar';


function Home() {

const videoHeader = useRef(null)

const attemptPlay = () => {
  videoHeader && 
  videoHeader.current &&
  videoHeader.current.play().catch(error => console.error("Error attempting to autoplay Header Video", error))
}

useEffect(() => {
  attemptPlay();
}, []);


  return (
    <div className="App">
      <div className='navBar'>
        <NavBar></NavBar>
      </div>
      <div className='header'>
        <div className='videoContainer'>
          <video src={headerVideo} loop muted alt="Header Video" ref={videoHeader} id='headerVideo'></video>
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
