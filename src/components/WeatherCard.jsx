import { MapPin } from "lucide-react";

const WeatherCard = ({weather, place}) => {
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
                            <div className="rounded-2xl shadow-2xl text-center p-4">
                            <h3 className="text-lg text-blue-500 font-bold">Feels Like</h3>
                            <p className="text-4xl text-blue-900 font-extrabold">{weather?.feelsLike}</p>
                            </div>

                            <div className="rounded-2xl shadow-2xl text-center p-4">
                            <h3 className="text-lg text-blue-500 font-bold">Humidity</h3>
                            <p className="text-4xl text-blue-900 font-extrabold">{weather?.humidity}</p>
                            </div>

                            <div className="rounded-2xl shadow-2xl text-center p-4">
                            <h3 className="text-lg text-blue-500 font-bold">Wind Speed</h3>
                            <p className="text-4xl text-blue-900 font-extrabold">{weather?.windSpeed}</p>
                            </div>
                        </div>

                    </div>
    );
};

export default WeatherCard;