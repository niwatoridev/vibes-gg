import './NavBar.css'
import Logo from './media/Logo.png'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="main-div">
      <div className='navLogo'>
          <Link to="/"><img src={Logo} alt="Vibes Logo" id='Logo' /></Link>
      </div>
      <div className='navContent'>
          <div className='navElement'>
            <Link to="/projects"><p>Sobre Nosotros</p></Link>
          </div>
          <div className='navElement'>
            <Link to="/projects"><p>Proyectos</p></Link>
          </div>
          <div className='navElement'>
            <Link to="/projects"><p>Contacto</p></Link>
          </div>
      </div>
    </div>
  );
}

export default NavBar;