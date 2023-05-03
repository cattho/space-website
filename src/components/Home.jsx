import { Link } from "react-router-dom"

const Home = () => {

    const api = 'https://space-tourism-data-default-rtdb.firebaseio.com/crew.json'

    const getData = async () => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log('Error:',error);
        }
    }

    getData()
    return (
        <div className="bg-[url('src/assets/home/background-home-desktop.jpg')] flex items-center justify-around h-screen w-screen bg-cover bg-no-repeat bg-center select-none">
            <div className="w-[450px] h-[382] text-white flex items-right justify-center flex-col">
                <h5 className="text-second-color tracking-[4.75px] text-[28px] font-barlowCondensed"> So, you want to travel to</h5>
                <h1 className="text-third-color text-[150px] font-bellefair w-full"> SPACE</h1>
                <p className="text-second-color text-[18px] leading-[32px] font-barlowCondensed"> Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className="w-[274px] h-[274px] flex items-center justify-center bg-white rounded-full ">
                <div className="font-bellefair text-[32px] tracking-[2px]">
                    <h4 className="w-[400px] h-[400px] rounded-full flex items-center justify-center transition-all duration-[1500ms] hover:bg-shadow-sphere"><Link to={'/destination'}>EXPLORE</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Home