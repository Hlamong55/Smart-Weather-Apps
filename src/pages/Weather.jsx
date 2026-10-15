import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

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
                    <div className="space-y-5">
                        <h1 className="text-3xl text-purple-700 font-bold ">Todya's Weather Details</h1>

                        <div className="flex items-center gap-3 text-blue-600">
                            <MapPin size={30}></MapPin>
                            <h2 className="text-3xl  font-bold ">{place.name}</h2>
                        </div>

                        <div className="flex items-center gap-16">
                            <h3 className="text-6xl text-blue-900 font-extrabold">{weather?.tempareture}</h3>
                            <p className="text-5xl text-blue-900 font-extrabold">{weather?.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div className="rounded-2xl shadow-2xl text-center p-4">
                            <h3 className="text-lg text-blue-900 font-bold">Feels Like</h3>
                            <p className="text-4xl text-blue-900 font-extrabold">{weather?.feelsLike}</p>
                            </div>

                            <div className="rounded-2xl shadow-2xl text-center p-4">
                            <h3 className="text-lg text-blue-900 font-bold">Humidity</h3>
                            <p className="text-4xl text-blue-900 font-extrabold">{weather?.humidity}</p>
                            </div>

                            <div className="rounded-2xl shadow-2xl text-center p-4">
                            <h3 className="text-lg text-blue-900 font-bold">Wind Speed</h3>
                            <p className="text-4xl text-blue-900 font-extrabold">{weather?.windSpeed}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;