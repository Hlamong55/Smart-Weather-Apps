import { MapPin } from "lucide-react";
import StatCard from "./StatCard";

const WeatherCard = ({weather, place}) => {

    const stat = [
        { icon: "" , label: "Feels Like", value: `${weather?.feelsLike}`},
        { icon: "" , label: "Humidity", value: `${weather?.humidity}`},
        { icon: "" , label: "Wind Speed", value: `${weather?.windSpeed}`}
    ]

    return (
        <div className="space-y-5">
                        <h1 className="text-2xl font-extrabold text-center">Today's Weather Details</h1>

                        <div className="flex items-center gap-3 text-blue-500">
                            <MapPin size={30}></MapPin>
                            <h2 className="text-3xl  font-bold ">{place.name}</h2>
                        </div>

                        <div className="flex items-center gap-10">
                            <h3 className="text-6xl text-blue-900 font-extrabold">{weather?.tempareture} C</h3>
                            <p className="text-5xl text-blue-900 font-extrabold">{weather?.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between gap-5">   

                            {
                                stat.map((s, index)=>(<StatCard key={index} s={s}></StatCard>))
                            }

                        </div>

                    </div>
    );
};

export default WeatherCard;