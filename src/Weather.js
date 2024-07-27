import React from "react";
import "./Weather.css";

export default function Weather() {
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
       
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <div className="clearfix">
             <img 
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
            alt="Mostly Cloudy"
            className="float-start"
            />
            <span className="temperature">26</span> 
            <span className="unit">°C</span>
            </div>  
         </div>
         <div className="col-6">
            <ul>
                <li>
                    Precipitation: 50%
                </li>
                <li>
                    Humidity: 75%
                </li>
                <li>
                    Wind: 13 km/h
                </li>
            </ul>

         </div>
        </div>
    </div>
}