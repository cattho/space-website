import React from 'react'
import europe from '../assets/destination/image-titan.png'

const Destination = () => {
  return (
    <div className="bg-[url('src/assets/destination/background-destination-desktop.jpg')] flex items-center justify-around h-screen w-screen bg-cover bg-no-repeat bg-center select-none ">
      <div className="flex flex-col ml-6">
        <h5 className='font-barlowCondensed text-[28px] text-third-color uppercase tracking-[4.72px] mb-[5rem]'> <span className='opacity-25 font-bold'>01</span> Pick your destination</h5>
        <img src={europe} alt="image" />
      </div>

      <div className="description-destination">
        <nav className='secnd-navbar'>
          <ul className='flex gap-2 uppercase'>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Moon</li>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Mars</li>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Europa</li>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Titan</li>
          </ul>
        </nav>

        <h2 className='text-third-color text-[100px] font-bellefair uppercase'>Titan</h2>

        <p> The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>

        <div className="stats">
          Avg. distance
          628 mil. km

          Est. travel time
          3 years
        </div>
      </div>
    </div>
  )
}

export default Destination