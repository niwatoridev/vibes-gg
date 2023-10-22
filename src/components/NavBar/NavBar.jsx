import './NavBar.css'
import Logo from './media/Logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function NavBar() {

  const FixedNav = () => {
   return <div className="main-div">
    <div className='background'></div>
              <div className='navLogo'>
              <HashLink to="#detectorHeader" smooth><img src={Logo} alt="Vibes Logo" id='Logo' /></HashLink>
              </div>
              <div className='navContent'>
                  <div className='navElement'>
                  <HashLink to="#detectorBody" smooth><p>Sobre Nosotros</p></HashLink>
                  </div>
                  <div className='navElement'>
                    <p>Proyectos</p>
                  </div>
                  <div className='navElement'>
                    <p>Contacto</p>
                  </div>
              </div>
           </div> 
  }



  return (
    FixedNav()
  );
}

export default NavBar;