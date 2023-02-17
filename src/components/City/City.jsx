import React from "react";
import { useParams } from "react-router-dom";
import './City.css'

export default function City({ cities }) { 

    let params = useParams();

        if(!cities.length) return <h1 className=".empty">No cities to be displayed</h1>;
    

    let [ city ] = cities.filter(city=>city.id === parseInt(params.cityId))
    return (
        <div>
                <div className="cntnr">
                    <h2>{city.name}</h2>
                    <div >
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Lattitude: {city.latitud}º</div>
                        <div>Longittude: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}