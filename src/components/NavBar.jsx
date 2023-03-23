import React from 'react'
import '../styles/navbar-styles.css'
import logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="logo" />
            <div className="nav-line"></div>
            <nav className='main-nav'>
                <Link className='nav-item' to="/"><b>00</b> Home</Link>
                <Link className='nav-item' to="/destination"><b>01</b> Destination</Link>
                <Link className='nav-item' href="#"><b>02</b> Crew</Link>
                <Link className='nav-item' href="#"><b>03</b> Technology</Link>
            </nav>
        </div>
    )
}

export default NavBar