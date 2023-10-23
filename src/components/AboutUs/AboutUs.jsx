import './AboutUs.css'
import gbLogo from '../../media/granBodega01.png'
import darkQualityLogo from '../../media/darkQualityEsports.png'
import novaGamingLogo from '../../media/novaGamingLogo.png'


function AboutUs() {

    const hoveredImg = (e) => {
        let image = e.target
        image.className = image.id
        }
        
        const noHoveredImg = (e) => {
          let image = e.target
          image.className = 'filteredLogo'
        } 

  const AboutUsSection = () => {
   return <div className='aboutUsContainer'>
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
  }



  return (
    AboutUsSection()
  );
}

export default AboutUs;