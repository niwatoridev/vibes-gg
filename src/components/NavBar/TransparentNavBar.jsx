import './TransparentNavBar.css'
import Logo from './media/Logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function TransparentNavBar() {

  
 
  const fixedNav = () => {
   return <div className="test-main-div">
    <div className='backgroundOut'></div>
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
    fixedNav()
  );
}

export default TransparentNavBar;