import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";

const Weather = () => {
    const value = useLocation()
    const place = value.state.location
    
    const fetchWeather = async()=> {
        try {
            const result = await getWeather(place)
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }

    fetchWeather()


    return (
        <div>
            This is weather page
        </div>
    );
};

export default Weather;