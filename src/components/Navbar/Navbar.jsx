import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import vibesLogo from './Media/Logo.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
        console.log(button)
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={click ? 'navbar active' : 'navbar'}>
                <div className='navbar-container'>
                    <HashLink to='#Home' smooth className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={vibesLogo} id='Logo' alt="Logo Vibes GG" />
                    </HashLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <HashLink to='#Home' smooth className='nav-links' onClick={closeMobileMenu}>
                                Inicio
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to='#AboutUs' smooth className='nav-links' onClick={closeMobileMenu}>
                                Sobre Nosotros
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to='#Projects' smooth className='nav-links' onClick={closeMobileMenu}>
                                Proyectos
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to='#ContactUs' smooth className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;