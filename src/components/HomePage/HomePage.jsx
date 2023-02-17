import React from "react";
import { Link } from "react-router-dom"
import "./HomePage.css"

export default function HomePage() {
    return(
            <Link to='/' className="HomePage">
            <h1 className="HomePage">My Weather App</h1>
            </Link>
    )
}