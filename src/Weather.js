import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({  ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            temperature: Math.round(response.data.temperature.current),
            description: response.data.condition.description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            humidity: Math.round(response.data.temperature.humidity),
            wind: Math.round(response.data.wind.speed),
        });

    }
    
    if (weatherData.ready) {
        return <div className="Weather">
        
        <form>
        <div className="row">
        <div className="col-9">
         <input type="search" 
         placeholder="Enter a city..." 
         className="form-control"
         autoFocus="on"
         />
         </div>
         <div className="col-3">
         <input type="submit" value="Search" className=" btn btn-secondary w-100"/>
         </div>
         </div>
        </form>
   
    <h1>{weatherData.city}</h1>
    <ul>
        <li>
            < FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize" >{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
        <div className="clearfix">
         <img 
        src={weatherData.iconUrl}
        alt={weatherData.description}
        className="float-start"
        />
        <span className="temperature">{weatherData.temperature}</span> 
        <span className="unit">°C</span>
        </div>  
     </div>
     <div className="col-6">
        <ul>
            <li>
                Humidity: {weatherData.humidity}%
            </li>
            <li>
                Wind: {weatherData.wind} km/h
            </li>
        </ul>

     </div>
    </div>
</div>

    } else {
    
    const apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
    let city = props.defaultCity;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return ("loading...");
    }

   
}