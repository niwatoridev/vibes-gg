import './NavBar.css'
import Logo from './media/Logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function NavBar() {

  const FixedNav = () => {
   return <div className="main-div">
    <div className='background'></div>
              <div className='navLogo'>
              <HashLink to="#home" smooth><img src={Logo} alt="Vibes Logo" id='Logo' /></HashLink>
              </div>
              <div className='navContent'>
                  <div className='navElement'>
                  <HashLink to="#aboutUs" smooth><p>Sobre Nosotros</p></HashLink>
                  </div>
                  <div className='navElement'>
                    <HashLink to="#projects" smooth><p>Proyectos</p></HashLink>
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