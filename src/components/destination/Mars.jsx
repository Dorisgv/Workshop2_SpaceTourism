import React from 'react'
import mars from "./Images/Mars.png"
import { Link, NavLink } from 'react-router-dom'
const Mars = () => {
  return (
    <section className='containerDestination'>
      <article className='containerDestination__left'>
        <img src={mars} alt="moon" />
      </article>
      <article className='containerDestination__right'>
        <nav>
          <NavLink to="/moon" className='links'>Moon</NavLink>
          <NavLink to="/mars" className='links'>Mars</NavLink>
          <NavLink to="/titan" className='links'>Titan</NavLink>
          <NavLink to="/europa" className='links'>Europa</NavLink>
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