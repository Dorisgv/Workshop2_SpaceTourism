import React from 'react'
import titan from "./Images/Titan.png"
import { NavLink } from 'react-router-dom'

const Titan = () => {
  return (
    <section className='containerDestination'>
      <article className='containerDestination__left'>
      <span><strong>01</strong> PICK YOUR DESTINATION</span>
        <img src={titan} alt="titán" />
      </article>
      <article className='containerDestination__right'>
        <nav>
          <NavLink to="/moon" className='links'>MOON</NavLink>
          <NavLink to="/mars" className='links'>MARS</NavLink>
          <NavLink to="/titan" className='links'>TITÁN</NavLink>
          <NavLink to="/europa" className='links'>EUROPA</NavLink>
        </nav>    
        <h1>TITÁN</h1>
        <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
        <div className='linea'></div>
        <div className='containerDestination__right--text'>
          <div>
            <span>AVG. DISTANCE</span>
            <h3>1.6 BIL. km</h3>
          </div>
          <div>
            <span>Est. travel time</span>
            <h3>7 years</h3>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Titan