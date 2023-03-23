import NavBar from './NavBar';
import '../styles/home-styles.css';

const Home = () => {
    return (
        <div className='main-container'>
            {/* <NavBar /> */}

            <div className='main-text-container'>
                <h5> So, you want to travel to</h5>
                <h1> SPACE</h1>
                <p> Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className="sphere-home">
                <h4>EXPLORE</h4>
            </div>
        </div>
    )
}

export default Home