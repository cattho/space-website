import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from '../components/Destination'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Crew from '../components/Crew'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp