import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import downArrow from '../../media/downArrow.png'
import { HashLink } from 'react-router-hash-link';
import ExpandingCards from '../../components/ExpandingCards/ExpandingCards';
import AboutUs from '../../components/AboutUs/AboutUs';
import VideoHeader from '../../components/VideoHeader/VideoHeader';
// import ContactUs from '../../components/ContacUs/ContactUs';



function Home() {

  return (
<div className='main-home-container'>
  <Navbar></Navbar>
  <div id='Home'></div>
  <VideoHeader></VideoHeader>
  <HashLink to="#AboutUs" smooth><img src={downArrow} className='downArrow' id='downArrowAboutUs' alt="downArrow" /></HashLink>
  <div id='AboutUsSection'>
    <div id='AboutUs'></div>
      <AboutUs></AboutUs>
  </div>
  <div id='ProjectsSection'>
    <div id='Projects'></div>
    <ExpandingCards></ExpandingCards>
  </div>
</div>
  );
}

export default Home;
