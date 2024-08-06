import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
        }, [props.coordinates]);

        
    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecastData);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecastData.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                             </div>
                             );
                        }
                     })}
                </div>
            </div>
        );
    } else {
    const apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;}
}