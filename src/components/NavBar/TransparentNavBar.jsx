import './TransparentNavBar.css'
import Logo from './media/Logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function TransparentNavBar() {

  
 
  const fixedNav = () => {
   return <div className="test-main-div">
    <div className='backgroundOut'></div>
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
        <HashLink to="#contactUs" smooth><p>Contacto</p></HashLink>
        </div>
    </div>
  </div> 
  }

  return (
    fixedNav()
  );
}

export default TransparentNavBar;