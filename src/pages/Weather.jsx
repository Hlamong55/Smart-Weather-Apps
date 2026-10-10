import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";

const Weather = () => {
    const value = useLocation()
    const place = value.state.location
    const [weather, setWeather] = useState(null);
    // console.log("weather", weather);
    
    useEffect(()=>{

        if(!place){
            return
        }

        const fetchWeather = async()=> {
        try {
            const result = await getWeather(place)
            // console.log(result);
            setWeather(result);
        } catch(error) {
            console.log(error);
        }
    }

    fetchWeather()
    }, [place])


    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="shadow-2xl rounded-2xl p-5">
                    <div>
                        <h1 className="text-3xl text-purple-600 font-bold ">Todya's Weather Details</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;