import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function dayOfTheWeek() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        day = days[day];

        return day;
    }

    return (
        <div className="WeatherForecast-day">
            <div className="WeatherForecast-day">{dayOfTheWeek()}</div>
            <WeatherIcon code={props.data.condition.icon} size="36"/>
            <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
            <span className="WeatherForecast-temp-min">{minTemperature()}</span>
            </div>
        </div>
    );
}