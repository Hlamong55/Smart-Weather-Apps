const WeatherType = ({ weather, place }) => {
  return (
    <div className="shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-between">
      <div>
        <h2 className="text-2xl font-extrabold text-center">
          Live in {place.name}
        </h2>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-5xl text-blue-900 font-extrabold">
          {weather?.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="rounded-full border p-2 border-blue-900 text-lg font-medium">
          Feel's Like: {weather?.feelsLike}
        </span>
      </div>
    </div>
  );
};

export default WeatherType;
