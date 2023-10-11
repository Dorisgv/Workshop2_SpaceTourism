import React from 'react'
import moon from "./Images/Moon.png"
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbars from './Navbars';
const Moon = () => {
  return (
    
    
    <section className='containerDestination'>
      <article className='containerDestination__left'>
        <span><strong>01</strong> PICK YOUR DESTINATION</span>
        <img src={moon} alt="moon" />
      </article>
      <article className='containerDestination__right'>
        <nav>
          <NavLink to="/moon" className='links'>MOON</NavLink>
          <NavLink to="/mars" className='links'>MARS</NavLink>
          <NavLink to="/titan" className='links'>TITÁN</NavLink>
          <NavLink to="/europa" className='links'>EUROPA</NavLink>
        </nav> 
        <nav>
          
        </nav>   
        <h1>MOON</h1>
        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <div className='linea'></div>
        <div className='containerDestination__right--text'>
          <div>
            <span>AVG. DISTANCE</span>
            <h3>384,400 km</h3>
          </div>
          <div>
            <span>Est. travel time</span>
            <h3>3 days</h3>
          </div>
        </div>
      </article>
    </section>
    

  )
}

export default Moon