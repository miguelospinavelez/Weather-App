import React from "react";
import Card from "../Card/Card";
import './Cards.css'

export default function Cards({cities, onClose}) {
   
    if (!cities.length) return <h1 className="empty">No cities to be displayed</h1>;
    if (cities.length===4) return cities.shift();

    if (cities)
    return (
        <div className="cards">
            {cities.map((c) => (
                <Card
                    max={c.max}
                    min={c.min}
                    name={c.name}
                    img={c.img}
                    onClose={() => onClose(c.id)}
                    id={c.id}
                    key={c.id}
                />
            ))}
        </div>
    );
}