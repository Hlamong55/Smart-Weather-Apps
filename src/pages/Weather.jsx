import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";

const Weather = () => {
    const value = useLocation()
    const place = value.state.location
    getWeather(place)
    return (
        <div>
            This is weather page
        </div>
    );
};

export default Weather;