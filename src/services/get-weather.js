const WMO_CODE = {
  0: {
    condition: "clear",
    description: "Clear sky",
    label: "clear_sky",
    icon: "clear_sky"
  },
  1: {
    condition: "mainly_clear",
    description: "Mainly clear",
    label: "mainly_clear",
    icon: "mainly_clear"
  },
  2: {
    condition: "partly_cloudy",
    description: "Partly cloudy",
    label: "partly_cloudy",
    icon: "partly_cloudy"
  },
  3: {
    condition: "overcast",
    description: "Overcast",
    label: "overcast",
    icon: "overcast"
  },
  4: {
    condition: "smoke",
    description: "Smoke",
    label: "smoke",
    icon: "smoke"
  },
  5: {
    condition: "haze",
    description: "Haze",
    label: "haze",
    icon: "haze"
  },
  6: {
    condition: "dust",
    description: "Dust suspended in the air",
    label: "dust",
    icon: "dust"
  },
  7: {
    condition: "dust",
    description: "Dust or sand raised by wind",
    label: "dust_or_sand",
    icon: "dust"
  },
  8: {
    condition: "dust",
    description: "Dust whirl",
    label: "dust_whirl",
    icon: "dust"
  },
  9: {
    condition: "dust",
    description: "Dust or sand storm",
    label: "dust_storm",
    icon: "dust_storm"
  },
  10: {
    condition: "mist",
    description: "Mist",
    label: "mist",
    icon: "mist"
  },
  11: {
    condition: "fog",
    description: "Shallow fog",
    label: "shallow_fog",
    icon: "fog"
  },
  12: {
    condition: "fog",
    description: "Fog, sky visible",
    label: "fog_sky_visible",
    icon: "fog"
  },
  13: {
    condition: "fog",
    description: "Fog, sky obscured",
    label: "fog_sky_obscured",
    icon: "fog"
  },
  14: {
    condition: "precipitation",
    description: "Precipitation, not reaching ground",
    label: "precipitation_not_reaching_ground",
    icon: "rain"
  },
  15: {
    condition: "precipitation",
    description: "Precipitation, slight",
    label: "slight_precipitation",
    icon: "rain"
  },
  16: {
    condition: "precipitation",
    description: "Precipitation, moderate",
    label: "moderate_precipitation",
    icon: "rain"
  },
  17: {
    condition: "thunderstorm",
    description: "Thunderstorm",
    label: "thunderstorm",
    icon: "thunderstorm"
  },
  18: {
    condition: "squalls",
    description: "Squalls",
    label: "squalls",
    icon: "wind"
  },
  19: {
    condition: "funnel_cloud",
    description: "Funnel cloud",
    label: "funnel_cloud",
    icon: "funnel_cloud"
  },
  20: {
    condition: "fog",
    description: "Fog or ice fog",
    label: "fog",
    icon: "fog"
  },
  21: {
    condition: "rain",
    description: "Rain",
    label: "rain",
    icon: "rain"
  },
  22: {
    condition: "snow",
    description: "Snow",
    label: "snow",
    icon: "snow"
  },
  23: {
    condition: "rain_snow",
    description: "Rain and snow",
    label: "rain_and_snow",
    icon: "rain_snow"
  },
  24: {
    condition: "freezing_rain",
    description: "Freezing rain",
    label: "freezing_rain",
    icon: "freezing_rain"
  },
  25: {
    condition: "shower",
    description: "Rain shower",
    label: "rain_shower",
    icon: "rain_shower"
  },
  26: {
    condition: "snow_shower",
    description: "Snow shower",
    label: "snow_shower",
    icon: "snow_shower"
  },
  27: {
    condition: "hail",
    description: "Hail",
    label: "hail",
    icon: "hail"
  },
  28: {
    condition: "fog",
    description: "Fog or mist",
    label: "fog_or_mist",
    icon: "fog"
  },
  29: {
    condition: "thunderstorm",
    description: "Thunderstorm",
    label: "thunderstorm",
    icon: "thunderstorm"
  },
  30: {
    condition: "dust",
    description: "Slight or moderate dust storm",
    label: "dust_storm",
    icon: "dust_storm"
  },
  31: {
    condition: "dust",
    description: "Slight or moderate dust storm",
    label: "dust_storm",
    icon: "dust_storm"
  },
  32: {
    condition: "dust",
    description: "Slight or moderate dust storm",
    label: "dust_storm",
    icon: "dust_storm"
  },
  33: {
    condition: "dust",
    description: "Severe dust storm",
    label: "severe_dust_storm",
    icon: "dust_storm"
  },
  34: {
    condition: "dust",
    description: "Severe dust storm",
    label: "severe_dust_storm",
    icon: "dust_storm"
  },
  35: {
    condition: "dust",
    description: "Severe dust storm",
    label: "severe_dust_storm",
    icon: "dust_storm"
  },
  36: {
    condition: "blowing_snow",
    description: "Slight or moderate blowing snow",
    label: "blowing_snow",
    icon: "snow"
  },
  37: {
    condition: "blowing_snow",
    description: "Heavy blowing snow",
    label: "heavy_blowing_snow",
    icon: "snow"
  },
  38: {
    condition: "blowing_snow",
    description: "Slight or moderate blowing snow",
    label: "blowing_snow",
    icon: "snow"
  },
  39: {
    condition: "blowing_snow",
    description: "Heavy blowing snow",
    label: "heavy_blowing_snow",
    icon: "snow"
  },
  40: {
    condition: "fog",
    description: "Distant fog",
    label: "distant_fog",
    icon: "fog"
  },
  41: {
    condition: "fog",
    description: "Fog in patches",
    label: "fog_patches",
    icon: "fog"
  },
  42: {
    condition: "fog",
    description: "Fog, sky visible",
    label: "fog_sky_visible",
    icon: "fog"
  },
  43: {
    condition: "fog",
    description: "Fog, sky obscured",
    label: "fog_sky_obscured",
    icon: "fog"
  },
  44: {
    condition: "fog",
    description: "Fog, sky obscured",
    label: "fog_sky_obscured",
    icon: "fog"
  },
  45: {
    condition: "fog",
    description: "Fog",
    label: "fog",
    icon: "fog"
  },
  46: {
    condition: "fog",
    description: "Fog, thick",
    label: "thick_fog",
    icon: "fog"
  },
  47: {
    condition: "fog",
    description: "Fog, freezing",
    label: "freezing_fog",
    icon: "freezing_fog"
  },
  48: {
    condition: "rime_fog",
    description: "Depositing rime fog",
    label: "rime_fog",
    icon: "freezing_fog"
  },
  49: {
    condition: "fog",
    description: "Fog, dense",
    label: "dense_fog",
    icon: "fog"
  },
  50: {
    condition: "drizzle",
    description: "Drizzle, slight",
    label: "slight_drizzle",
    icon: "drizzle"
  },
  51: {
    condition: "drizzle",
    description: "Drizzle, slight",
    label: "slight_drizzle",
    icon: "drizzle"
  },
  52: {
    condition: "drizzle",
    description: "Drizzle, moderate",
    label: "moderate_drizzle",
    icon: "drizzle"
  },
  53: {
    condition: "drizzle",
    description: "Drizzle, moderate",
    label: "moderate_drizzle",
    icon: "drizzle"
  },
  54: {
    condition: "drizzle",
    description: "Drizzle, heavy",
    label: "heavy_drizzle",
    icon: "drizzle"
  },
  55: {
    condition: "drizzle",
    description: "Drizzle, heavy",
    label: "heavy_drizzle",
    icon: "drizzle"
  },
  56: {
    condition: "freezing_drizzle",
    description: "Freezing drizzle, slight",
    label: "slight_freezing_drizzle",
    icon: "freezing_drizzle"
  },
  57: {
    condition: "freezing_drizzle",
    description: "Freezing drizzle, moderate or heavy",
    label: "heavy_freezing_drizzle",
    icon: "freezing_drizzle"
  },
  58: {
    condition: "drizzle_rain",
    description: "Drizzle and rain",
    label: "drizzle_and_rain",
    icon: "rain"
  },
  59: {
    condition: "drizzle_rain",
    description: "Heavy drizzle and rain",
    label: "heavy_drizzle_and_rain",
    icon: "rain"
  },
  60: {
    condition: "rain",
    description: "Rain, slight",
    label: "slight_rain",
    icon: "rain"
  },
  61: {
    condition: "rain",
    description: "Rain, slight",
    label: "slight_rain",
    icon: "rain"
  },
  62: {
    condition: "rain",
    description: "Rain, moderate",
    label: "moderate_rain",
    icon: "rain"
  },
  63: {
    condition: "rain",
    description: "Rain, moderate",
    label: "moderate_rain",
    icon: "rain"
  },
  64: {
    condition: "rain",
    description: "Rain, heavy",
    label: "heavy_rain",
    icon: "heavy_rain"
  },
  65: {
    condition: "rain",
    description: "Rain, heavy",
    label: "heavy_rain",
    icon: "heavy_rain"
  },
  66: {
    condition: "freezing_rain",
    description: "Freezing rain, slight",
    label: "slight_freezing_rain",
    icon: "freezing_rain"
  },
  67: {
    condition: "freezing_rain",
    description: "Freezing rain, moderate or heavy",
    label: "heavy_freezing_rain",
    icon: "freezing_rain"
  },
  68: {
    condition: "rain_snow",
    description: "Rain or drizzle with snow",
    label: "rain_and_snow",
    icon: "rain_snow"
  },
  69: {
    condition: "rain_snow",
    description: "Rain or drizzle with snow, heavy",
    label: "heavy_rain_and_snow",
    icon: "rain_snow"
  },
  70: {
    condition: "snow",
    description: "Snow, slight",
    label: "slight_snow",
    icon: "snow"
  },
  71: {
    condition: "snow",
    description: "Snow, slight",
    label: "slight_snow",
    icon: "snow"
  },
  72: {
    condition: "snow",
    description: "Snow, moderate",
    label: "moderate_snow",
    icon: "snow"
  },
  73: {
    condition: "snow",
    description: "Snow, moderate",
    label: "moderate_snow",
    icon: "snow"
  },
  74: {
    condition: "snow",
    description: "Snow, heavy",
    label: "heavy_snow",
    icon: "heavy_snow"
  },
  75: {
    condition: "snow",
    description: "Snow, heavy",
    label: "heavy_snow",
    icon: "heavy_snow"
  },
  76: {
    condition: "ice_crystals",
    description: "Ice crystals",
    label: "ice_crystals",
    icon: "snow"
  },
  77: {
    condition: "snow_grains",
    description: "Snow grains",
    label: "snow_grains",
    icon: "snow"
  },
  78: {
    condition: "ice_crystals",
    description: "Ice crystals, diamond dust",
    label: "diamond_dust",
    icon: "snow"
  },
  79: {
    condition: "ice_pellets",
    description: "Ice pellets",
    label: "ice_pellets",
    icon: "hail"
  },
  80: {
    condition: "rain_shower",
    description: "Rain showers, slight",
    label: "slight_rain_shower",
    icon: "rain_shower"
  },
  81: {
    condition: "rain_shower",
    description: "Rain showers, moderate",
    label: "moderate_rain_shower",
    icon: "rain_shower"
  },
  82: {
    condition: "rain_shower",
    description: "Rain showers, violent",
    label: "violent_rain_shower",
    icon: "heavy_rain"
  },
  83: {
    condition: "rain_snow_shower",
    description: "Rain and snow showers, slight",
    label: "slight_rain_snow_shower",
    icon: "rain_snow"
  },
  84: {
    condition: "rain_snow_shower",
    description: "Rain and snow showers, moderate or heavy",
    label: "heavy_rain_snow_shower",
    icon: "rain_snow"
  },
  85: {
    condition: "snow_shower",
    description: "Snow showers, slight",
    label: "slight_snow_shower",
    icon: "snow_shower"
  },
  86: {
    condition: "snow_shower",
    description: "Snow showers, moderate or heavy",
    label: "heavy_snow_shower",
    icon: "snow_shower"
  },
  87: {
    condition: "snow_hail",
    description: "Snow pellets or small hail",
    label: "snow_pellets",
    icon: "hail"
  },
  88: {
    condition: "snow_hail",
    description: "Snow pellets or hail",
    label: "snow_hail",
    icon: "hail"
  },
  89: {
    condition: "hail",
    description: "Hail",
    label: "hail",
    icon: "hail"
  },
  90: {
    condition: "hail",
    description: "Hail, heavy",
    label: "heavy_hail",
    icon: "hail"
  },
  91: {
    condition: "thunderstorm",
    description: "Thunderstorm with slight rain",
    label: "thunderstorm_slight_rain",
    icon: "thunderstorm"
  },
  92: {
    condition: "thunderstorm",
    description: "Thunderstorm with moderate or heavy rain",
    label: "thunderstorm_heavy_rain",
    icon: "thunderstorm"
  },
  93: {
    condition: "thunderstorm",
    description: "Thunderstorm with slight snow or hail",
    label: "thunderstorm_snow_hail",
    icon: "thunderstorm"
  },
  94: {
    condition: "thunderstorm",
    description: "Thunderstorm with heavy snow or hail",
    label: "thunderstorm_heavy_snow_hail",
    icon: "thunderstorm"
  },
  95: {
    condition: "thunderstorm",
    description: "Thunderstorm, slight or moderate",
    label: "thunderstorm",
    icon: "thunderstorm"
  },
  96: {
    condition: "thunderstorm_hail",
    description: "Thunderstorm with slight hail",
    label: "thunderstorm_slight_hail",
    icon: "thunderstorm"
  },
  97: {
    condition: "thunderstorm_hail",
    description: "Thunderstorm with heavy hail",
    label: "thunderstorm_heavy_hail",
    icon: "thunderstorm"
  },
  98: {
    condition: "thunderstorm",
    description: "Thunderstorm with dust storm",
    label: "thunderstorm_dust_storm",
    icon: "thunderstorm"
  },
  99: {
    condition: "thunderstorm_hail",
    description: "Thunderstorm with heavy hail",
    label: "thunderstorm_heavy_hail",
    icon: "thunderstorm"
  }
};



export const getWeather = async (place) =>{
    // console.log("Function:", place);
    const { lat, lon } = place
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,rain,apparent_temperature,is_day` ;

    const result = await fetch(url)
    // console.log(await result.json());
    const data = await result.json();
    const now = data.current
    // console.log(now);
    if (!now){
        throw new Error("Weathe details not found!!");
    }


    const weather = WMO_CODE[now.weather_code]

    const icon = weather.icon === "clear" && now.is_day === 0 ? "clear_night" : weather.icon


    return {
        tempareture: Math.round(now.temperature_2m),
        humidity: now.relative_humidity_2m,
        windSpeed: now.wind_speed_10m,
        feelsLike: Math.round(now.apparent_temperature),

        condition: weather.condition,
        description: weather.description,
        label: weather.label,
        icon 
    }
}