export const getRecommandation = (weather) => {
    if (!weather) {
        return;
    }

    switch (weather.condition) {
        case "clear":
        case "mainly_clear":
            return {
                type: "sun",
                label: "Sunny",
                text: "It's a clear day outside. Enjoy the sunshine!"
            };

        case "partly_cloudy":
            return {
                type: "cloud",
                label: "Partly Cloudy",
                text: "It's partly cloudy outside. Have a great day!"
            };

        case "overcast":
            return {
                type: "cloud",
                label: "Overcast",
                text: "The sky is overcast. You may want to carry an umbrella."
            };

        case "smoke":
        case "haze":
        case "dust":
        case "mist":
            return {
                type: "warning",
                label: "Poor Visibility",
                text: "Visibility may be low outside. Drive carefully and avoid unnecessary outdoor activities."
            };

        case "fog":
        case "rime_fog":
            return {
                type: "fog",
                label: "Foggy",
                text: "It's foggy outside. Drive slowly and use fog lights if needed."
            };

        case "drizzle":
        case "freezing_drizzle":
            return {
                type: "rain",
                label: "Drizzle",
                text: "Light precipitation is expected. Carry an umbrella when going outside."
            };

        case "rain":
        case "rain_shower":
            return {
                type: "rain",
                label: "Rain",
                text: "It's rainy outside. Carry an umbrella and drive safely."
            };

        case "freezing_rain":
            return {
                type: "warning",
                label: "Freezing Rain",
                text: "Freezing rain can make roads slippery. Avoid unnecessary travel."
            };

        case "snow":
        case "snow_shower":
        case "blowing_snow":
        case "snow_grains":
            return {
                type: "snow",
                label: "Snow",
                text: "It's snowing outside. Drive safely and wear warm clothes."
            };

        case "rain_snow":
        case "rain_snow_shower":
            return {
                type: "snow",
                label: "Rain and Snow",
                text: "Rain and snow are expected. Stay warm and travel carefully."
            };

        case "ice_crystals":
        case "ice_pellets":
        case "hail":
        case "snow_hail":
            return {
                type: "warning",
                label: "Icy Weather",
                text: "Icy precipitation may make roads dangerous. Stay safe and avoid unnecessary travel."
            };

        case "thunderstorm":
        case "thunderstorm_hail":
            return {
                type: "storm",
                label: "Thunderstorm",
                text: "A thunderstorm is occurring or expected. Stay indoors and avoid open areas."
            };

        case "squalls":
            return {
                type: "wind",
                label: "Strong Winds",
                text: "Strong wind gusts are possible. Secure loose objects and travel carefully."
            };

        case "funnel_cloud":
            return {
                type: "warning",
                label: "Severe Weather",
                text: "A funnel cloud has been reported. Seek shelter and follow local weather alerts."
            };

        case "precipitation":
            return {
                type: "rain",
                label: "Precipitation",
                text: "Precipitation is possible. Check the weather before heading outside."
            };

        default:
            return {
                type: "info",
                label: "Weather Update",
                text: "Check the latest weather forecast before heading outside."
            };
    }
};