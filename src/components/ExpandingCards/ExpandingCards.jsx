import './ExpandingCards.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../media/panelBackground.jpg'
import { useState } from 'react';


function ExpandingCards() {

    const panels = document.querySelectorAll('.panel')

    function removeAllActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove('active')
        }
        )
    }

    function addActiveClass(e) {


        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
        } else {
            removeAllActiveClasses(e)
            e.target.classList.add('active')
        }
    }



    const Cards = () => {
        return <div className='projectsContainer'>
            <h1>Proyectos</h1>
            <div className="container">
                <div className="panel" onMouseEnter={addActiveClass}>
                    <h2 className="imageTitle">Chilling Vibes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus et. Ultricies tristique nulla aliquet enim. Vitae nunc sed velit dignissim sodales ut eu. Facilisis volutpat est velit egestas.</p>
                </div>
                <div className="panel" onMouseEnter={addActiveClass}>
                    <h2 className="imageTitle">Dark Vibes Cup</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus et. Ultricies tristique nulla aliquet enim. Vitae nunc sed velit dignissim sodales ut eu. Facilisis volutpat est velit egestas.</p>
                </div>
                <div className="panel" onMouseEnter={addActiveClass}>
                    <h2 className="imageTitle" >Torneo Gamer Gran Bodega</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus et. Ultricies tristique nulla aliquet enim. Vitae nunc sed velit dignissim sodales ut eu. Facilisis volutpat est velit egestas.</p>
                </div>
                <div className="panel" onMouseEnter={addActiveClass}>
                    <h2 className="imageTitle">Torneo Gamer Gran Bodega 2023</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus et. Ultricies tristique nulla aliquet enim. Vitae nunc sed velit dignissim sodales ut eu. Facilisis volutpat est velit egestas.</p>
                </div>
            </div>
        </div>
    }

    return (
        Cards()
    );
}

export default ExpandingCards;