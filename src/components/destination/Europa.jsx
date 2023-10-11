import React from 'react'
import europa from "./Images/Europa.png"
import { NavLink } from 'react-router-dom'

const Europa = () => {
  return (
    <section className='containerDestination'>
      <article className='containerDestination__left'>
        <span><strong>01</strong> PICK YOUR DESTINATION</span>
        <img src={europa} alt="europa" />
      </article>
      <article className='containerDestination__right'>
        <nav>
          <NavLink to="/moon" className='links'>MOON</NavLink>
          <NavLink to="/mars" className='links'>MARS</NavLink>
          <NavLink to="/titan" className='links'>TITÁN</NavLink>
          <NavLink to="/europa" className='links'>EUROPA</NavLink>
        </nav>    
        <h1>EUROPA</h1>
        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
        <div className='linea'></div>
        <div className='containerDestination__right--text'>
          <div>
            <span>AVG. DISTANCE</span>
            <h3>628 MIL. km</h3>
          </div>
          <div>
            <span>Est. travel time</span>
            <h3>3 years</h3>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Europa