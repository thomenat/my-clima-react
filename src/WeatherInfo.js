import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className = "WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li>
                < FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize" >{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <div className="d-flex">
                <WeatherIcon 
                code={props.data.icon} 
                alt={props.data.iconDescription}
                size={65}
                />
                < WeatherTemperature celsius={props.data.temperature} fahrenheit={Math.round((props.data.temperature * 9/5) + 32)}/>   
           </div>
         </div>
         <div className="col-6">
            <ul>
                <li>
                    Humidity: {props.data.humidity}%
                </li>
                <li>
                    Wind: {props.data.wind} km/h
                </li>
            </ul>
    
         </div>
        </div>
    </div>);

}