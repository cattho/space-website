import React from 'react'
import europe from '../assets/destination/image-titan.png'

const Destination = () => {
  return (
    <div className="bg-[url('src/assets/destination/background-destination-desktop.jpg')] flex items-center justify-around h-screen w-screen bg-cover bg-no-repeat bg-center select-none ">
      <div className="flex flex-col ml-6">
        <h5 className='font-barlowCondensed text-[28px] text-third-color uppercase tracking-[4.72px] mb-[5rem]'> <span className='opacity-25 font-bold'>01</span> Pick your destination</h5>
        <img src={europe} alt="image" />
      </div>

      <div className="description-destination w-[500px] mb-9 flex flex-col h-[472px]">
        <nav>
          <ul className='flex gap-2 uppercase'>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Moon</li>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Mars</li>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Europa</li>
            <li className='font-barlowCondensed text-[16px] text-second-color tracking-wider hover:underline hover:text-third-color active:underline'>Titan</li>
          </ul>
        </nav>

        <h2 className='text-third-color text-[100px] font-bellefair uppercase'>Titan</h2>

        <p className='text-second-color text-[18px]'> The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>

        <div className="mt-12 border-t-[1px] border-[#383B4B] flex gap-48 uppercase">
          <span className='flex flex-col'>
            <p className='text-[14px] text-second-color mt-2'> Avg. distance</p>
            <p className='text-[28px] text-third-color'>628 mil. km</p>
          </span>

          <span className='flex flex-col'>
            <p className='text-[14px] text-second-color mt-2'>Est. travel time</p>
            <p className='text-[28px] text-third-color'> 3 years</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Destination