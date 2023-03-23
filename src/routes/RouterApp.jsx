import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from '../components/Destination'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp