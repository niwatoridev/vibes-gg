import './Home.css';
import { useEffect, useRef, useState } from 'react';
import headerVideo from "./media/header-video.mp4"
import TransparentNavBar from '../../components/NavBar/TransparentNavBar';
import NavBar from '../../components/NavBar/NavBar';
import gbLogo from '../../media/granBodega01.png'
import darkVibesCupLogo from '../../media/darkVibesCup02.png'
import darkQualityLogo from '../../media/darkQualityEsports.png'

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
        <div id='detectorHeader'></div>
        <div className='videoContainer'>
          <div ref={myRef} className='detectorNav'></div>
          <video ref={videoHeader} src={headerVideo} loop muted alt="Header Video" id='headerVideo'></video>
        </div>
      </div>
      <div className='body'id='detectorBody'>
        <div className='aboutUsContainer'>
            <div className='aboutUsTitleAndText'>
              <h1>Bienvenidos a VibesGG: Donde los Esports Cobran Vida</h1>
              <p>En VibesGG, nos apasiona impulsar la emocionante y en constante crecimiento escena de los esports en México y América Latina. Somos mucho más que una empresa; somos creadores de experiencias, diseñadores de oportunidades y facilitadores de conexiones entre las marcas y la vibrante comunidad de los videojuegos. <br /><br />Visualizamos un futuro en el que los esports no solo sean un fenómeno cultural, sino también una poderosa herramienta de marketing. Queremos ser líderes en este cambio, impulsando el crecimiento de la escena competitiva y permitiendo que las marcas se sumerjan en la cultura gamer de manera auténtica.</p>
            </div>
            <div className='partners'>
              <div className='partnersTitle'>
                <h3>MARCAS QUE HAN CONFIADO EN NOSOTROS</h3>
              </div>
              <div className='partnersLogos'>
                <img src={gbLogo} id='gbLogo' alt="Logo Gran Bodega" />
                <img src={darkVibesCupLogo} id='darkVibesCupLogo' alt="Logo Dark Vibes Cup" />
                <img src={darkQualityLogo} id='darkQualityLogo' alt="Logo Dark Quality" />
                <img src={gbLogo} id='gbLogo' alt="Logo Gran Bodega" />
                <img src={gbLogo} id='gbLogo' alt="Logo Gran Bodega" />
              </div>
            </div>
        </div>
      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default Home;
