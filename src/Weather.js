import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({  ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            coordinates: response.data.coordinates,
            date: new Date(response.data.time * 1000),
            temperature: Math.round(response.data.temperature.current),
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            humidity: Math.round(response.data.temperature.humidity),
            wind: Math.round(response.data.wind.speed),
        });

    }

    function search() {
        const apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function updateWeatherData(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) { 
        setCity(event.target.value);
    }

    
    if (weatherData.ready) {
        return <div className="Weather">
        <form onSubmit={updateWeatherData}>
        <div className="row">
        <div className="col-9">
         <input type="search" 
         placeholder="Enter a city..." 
         className="form-control"
         autoFocus="on"
         onChange={handleCityChange}
         />
         </div>
         <div className="col-3">
         <input type="submit" value="Search" className=" btn w-100"/>
         </div>
         </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    } else {
        search();
        return ("loading...");
     }; 
}