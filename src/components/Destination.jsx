import React from 'react'
import europe from '../assets/destination/image-titan.png'

const Destination = () => {
  return (
    <div className='destination-container'>
      <div className="image-content">
        <h5> <span>01</span> Pick your destination</h5>
        <img src={europe} alt="image" />
      </div>

      <div className="description-destination">
        <nav className='secnd-navbar'>
          <ul>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </ul>
        </nav>

        <h2>Titan</h2>

        <p> The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
          </p>

        Avg. distance
        628 mil. km

        Est. travel time
        3 years
      </div>
    </div>
  )
}

export default Destination