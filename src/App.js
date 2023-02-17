import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import City from "./components/City/City";
import Nav from "./components/Nav/Nav";
import Clock from "./components/Clock/Clock";
import "./index.css";

export default function App() {
    const [cities, setCities] = useState([]);
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

    function onSearch(city) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((r) => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    const city = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon,
                    };
                    setCities((oldCities) => [...oldCities, city]);
                } 
            });
    }

    function onClose(id) {
        setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    }

    return (
        <>
            <header className="App">
                <HomePage />
            </header>

            <div>
                <Nav onSearch={onSearch} />
            </div>

            <hr />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Cards cities={cities} onClose={onClose} />
                        </div>
                    }
                />
                <Route path="/About" element={<About/>} />
                <Route path="/City/:cityId" element={<City cities={cities}/>} />
            </Routes>
            <footer>
                <hr />
                <Clock />
            </footer>
        </>
    );
}


