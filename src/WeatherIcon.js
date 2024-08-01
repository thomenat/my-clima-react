import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDS_DAY",
        "few-clouds-night": "PARTLY_CLOUDS_NIGHT",
        "scattered-clouds-day": "CLOUDY",
        "scattered-clouds-night": "CLOUDY",
        "broken-clouds-day": "CLOUDY",
        "broken-clouds-night": "CLOUDY",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "RAIN",
        "thunderstorm-night": "RAIN",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG"
    };
    
    return  (
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color='black'
        size="55"
        animate={true}
        />
    )
}