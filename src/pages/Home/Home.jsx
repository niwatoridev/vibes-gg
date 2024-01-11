import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import downArrow from '../../media/downArrow.png'
import { HashLink } from 'react-router-hash-link';
import ExpandingCards from '../../components/ExpandingCards/ExpandingCards';
import AboutUs from '../../components/AboutUs/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';
import VideoHeader from '../../components/VideoHeader/VideoHeader';
import Footer from '../../components/Footer/Footer';
// import ContactUs from '../../components/ContacUs/ContactUs';



function Home() {

  const isDeviceDesktop = window.matchMedia("(min-width: 768px)").matches

  return (
<div className='main-home-container'>
  <Navbar></Navbar>
  <div id='Home'></div>
  <VideoHeader></VideoHeader>
  <HashLink to="#AboutUs" smooth><img src={downArrow} className='downArrow' id='downArrowAboutUs' alt="downArrow" /></HashLink>
  <div id='AboutUsSection'>
    <div id='AboutUs'></div>
     {isDeviceDesktop ? <AboutUs></AboutUs> : 'Pantalla de Movil'}       
  </div>
  <div id='ProjectsSection'>
    <div id='Projects'></div>
    <ExpandingCards></ExpandingCards>
  </div>
  <div id='ContactUsSection'>
    <div id='ContactUs'></div>
    <ContactUs></ContactUs>
  </div>
  <div id='FooterSection'>
    <div id='Footer'></div>
    <Footer></Footer>
  </div>
</div>
  );
}

export default Home;
