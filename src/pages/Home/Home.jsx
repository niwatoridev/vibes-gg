import './Home.css';
import { useEffect, useRef, useState } from 'react';
import headerVideo from "./media/header-video.mp4"
import TransparentNavBar from '../../components/NavBar/TransparentNavBar';
import NavBar from '../../components/NavBar/NavBar';
import gbLogo from '../../media/granBodega01.png'
import darkQualityLogo from '../../media/darkQualityEsports.png'
import downArrow from '../../media/downArrow.png'
import novaGamingLogo from '../../media/novaGamingLogo.png'
import { HashLink } from 'react-router-hash-link';



function Home() {

const videoHeader = useRef(null)
const [navIsTransparent, setNavIsTransparent] = useState(true)
const videoRef = useRef();
const homeRef = useRef();
const [ isHomeRefVisible, setIsHomeRefVisible ] = useState(false);


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

useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    console.log(entry)
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 2000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 3000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 4000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 5000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 6000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 8000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 9000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 10000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 11000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 12000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 13000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 14000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 15000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 16000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 17000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 18000);
    setTimeout(()=> {setIsHomeRefVisible(entry.isIntersecting)}, 19000);
    setTimeout(()=> {setIsHomeRefVisible(!entry.isIntersecting)}, 20000);

  })
  observer.observe(homeRef.current)
  }, [])

const hoveredImg = (e) => {
let image = e.target
image.className = image.id
}

const noHoveredImg = (e) => {
  let image = e.target
  image.className = 'filteredLogo'
} 

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
          {isHomeRefVisible ? <HashLink to="#aboutUs" smooth><img src={downArrow} className='downArrow' alt="downArrow" /></HashLink> : ''}
        </div>
      </div>
      <div className='body'>
        <div id='aboutUs'></div>
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
              <a href="https://www.lagranbodega.com.mx/" target='_blank'><img src={gbLogo} id='gbLogo' className='filteredLogo' onMouseEnter={hoveredImg} onMouseLeave={noHoveredImg} alt="Logo Gran Bodega" /></a>
                <a href="https://twitter.com/novagamingsmash" target='_blank'><img src={novaGamingLogo} id='novaGamingLogo' className='filteredLogo' onMouseEnter={hoveredImg} onMouseLeave={noHoveredImg} alt="Logo Gran Bodega" /></a>
                <a href="https://www.facebook.com/DQTTeam" target='_blank'><img src={darkQualityLogo} id='darkQualityLogo' className='filteredLogo' onMouseEnter={hoveredImg} onMouseLeave={noHoveredImg} alt="Logo Dark Quality" /></a>
              </div>
            </div>
        </div>
        <div className='projectsContainer' id='projects'>

        </div>
      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default Home;
