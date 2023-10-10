import React from 'react'
import mars from "./Images/Mars.png"
import { Link, NavLink } from 'react-router-dom'
const Mars = () => {
  return (
    <section className='containerDestination'>
      <article className='containerDestination__left'>
      <span><strong>01</strong> PICK YOUR DESTINATION</span>
        <img src={mars} alt="mars" />
      </article>
      <article className='containerDestination__right'>
        <nav>
          <NavLink to="/moon" className='links'>MOON</NavLink>
          <NavLink to="/mars" className='links'>MARS</NavLink>
          <NavLink to="/titan" className='links'>TITÁN</NavLink>
          <NavLink to="/europa" className='links'>EUROPA</NavLink>
        </nav>    
        <h1>MARS</h1>
        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
        <div className='linea'></div>
        <div className='containerDestination__right--text'>
          <div>
            <span>AVG. DISTANCE</span>
            <h3>225 MIL. km</h3>
          </div>
          <div>
            <span>Est. travel time</span>
            <h3>9 months</h3>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Mars