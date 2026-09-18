import { useState } from "react";

const Home = () => {
    const [click, setClick] = useState("")
    console.log(click);

    return (
        <div className="text-center">
            <h1 className="text-6xl font-black text-blue-300">NextLevel <span className="text-blue-600">Weather</span></h1>

            <p className="text-lg font-semibold py-2 text-gray-500">Check your todays Weather in NextLevel</p>

            <div className="pt-5">
                <button 
                type="button" 
                onClick={()=>setClick("Checking")}
                className="text-lg font-medium px-5 py-2.5 bg-blue-600 rounded-2xl text-white hover:scale-105 transition-all hover:bg-blue-800">
                    Check Weather
                </button>
            </div>
        </div>
    );
};

export default Home;