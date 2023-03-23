import React from 'react'
import '../styles/navbar-styles.css'
import logo from '../assets/shared/logo.svg';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="logo" />
            <nav className='main-nav'>
                <a className='nav-item' href="#">00 Home</a>
                <a className='nav-item' href="#">01 Destination</a>
                <a className='nav-item' href="#">02 Crew</a>
                <a className='nav-item' href="#">03 Technology</a>
            </nav>
        </div>
    )
}

export default NavBar