import logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='fixed flex items-center justify-between w-full h-[96px] top-[40px] z-50'>
            <img src={logo} alt="logo" className='absolute left-[55px] w-12 h-12' />
            <div className="border border-gray-600 w-[47rem] absolute left-60 z-[1000]"></div>
            <nav className='bg-gray-400 bg-opacity-20 h-full w-1/2 flex items-center gap-4 backdrop-filter justify-start pl-20 pr-8 absolute right-0 z-50 backdrop-blur-lg  uppercase'>
                <Link className='font-barlowCondensed text-[16px] text-third-color tracking-wider hover:underline active:underline' to="/"><b>00</b> Home</Link>
                <Link className='font-barlowCondensed text-[16px] text-third-color tracking-wider hover:underline active:underline' to="/destination"><b>01</b> Destination</Link>
                <Link className='font-barlowCondensed text-[16px] text-third-color tracking-wider hover:underline active:underline' href="#"><b>02</b> Crew</Link>
                <Link className='font-barlowCondensed text-[16px] text-third-color tracking-wider hover:underline active:underline' href="#"><b>03</b> Technology</Link>
            </nav>
        </div>
    )
}

export default NavBar