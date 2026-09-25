import { X } from "lucide-react";
import { useState } from "react";
import { getGeolocation } from "../services/geolocation";
import { useNavigate } from "react-router";

const LocationModal = ({ onClose }) => {
  const navigate = useNavigate("")
  const [city, setCity] = useState("");
  const [error, setError] = useState("")


  const goToPage = (location) => {
    navigate("/weather", {state: {location}})
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    const value = city.trim();
    // console.log(value);
    
    try{
        const location = await getGeolocation(value)
        if(!location){
            setError("Geocoding request failed!")
        }
        goToPage(location)
    } catch (error) {
        console.log(error);
    }
  };


  const handleGeoLocations = ()=>{
    navigator.geolocation.getCurrentPosition((positions)=>{
        const {latitude, longitude} = positions.coords
        console.log({latitude, longitude});
    }, (error)=>{
        console.log(error);
    }, {
        timeout: 1000
    })
  }



  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-600/70">
      <div className="h-85 w-md bg-gray-200 shadow-2xl rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Where are you today?</h2>

          <button
            onClick={onClose}
            className="bg-gray-300 text-red-600 rounded-full border p-1 hover:bg-red-600 hover:text-white"
          >
            <X />
          </button>
        </div>

        <div className="pt-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              placeholder="Enter City Name"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-2 p-2.5 rounded-lg"
            />

            <div>
              <button
                type="submit"
                className="text-lg w-full font-medium px-4 py-2 bg-blue-600 rounded-2xl text-white hover:scale-105 transition-all hover:bg-blue-800"
              >
                Get Weather
              </button>
            </div>
          </form>
        </div>

        <div className="text-center font-semibold py-2">or</div>

        <div>
          <button
            type="button"
            onClick={handleGeoLocations}
            className="text-lg w-full font-medium px-4 py-2 bg-blue-600 rounded-2xl text-white hover:scale-105 transition-all hover:bg-blue-800"
          >
            Use My Location
          </button>
        </div>

      </div>
    </div>
  );
};

export default LocationModal;
