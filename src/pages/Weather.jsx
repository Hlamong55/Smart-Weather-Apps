import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherType from "../components/WeatherType";
import RecommandationCard from "../components/RecommandationCard";
import { getRecommandation } from "../utilities/getRecommandation";

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
            <div className="grid md:grid-cols-2 gap-10">
                
                {/* left div */}
                <div className="space-y-3">

                    <div className="shadow-2xl rounded-2xl p-5">
                    {/* weather card */}
                    <WeatherCard weather={weather} place={place}></WeatherCard>
                    </div>

                    {/* recommandation card */}
                   <RecommandationCard recommandation={getRecommandation(weather)}></RecommandationCard>
                </div>
                


                {/* right div - weather type card */}
                <WeatherType weather={weather} place={place}></WeatherType>

            </div>
        </div>
    );
};

export default Weather;