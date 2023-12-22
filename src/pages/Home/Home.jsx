import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
// import { useEffect, useRef, useState } from 'react';
// import TransparentNavBar from '../../components/NavBar/TransparentNavBar';
import NavBar from '../../components/Navbar/Navbar';
// import downArrow from '../../media/downArrow.png'
// import { HashLink } from 'react-router-hash-link';
// import ExpandingCards from '../../components/ExpandingCards/ExpandingCards';
import AboutUs from '../../components/AboutUs/AboutUs';
import VideoHeader from '../../components/VideoHeader/VideoHeader';
// import ContactUs from '../../components/ContacUs/ContactUs';



function Home() {

  return (
<div className='main-home-container'>
<Navbar></Navbar>
<VideoHeader></VideoHeader>
<AboutUs></AboutUs>
</div>
  );
}

export default Home;
