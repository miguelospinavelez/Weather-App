import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSearch(city);
                setCity("");
            }}
            autoComplete="on"
        >
            <input
                type="text"
                placeholder="Find a city..."
                className="search"
                onFocus={(e) => setCity((e.target.value = ""))}
                onClick={(e) => setCity((e.target.value = ""))}
                onChange={(e) => setCity(e.target.value)}
                maxLength="30"
                autoComplete="on"
            />
            <input type="submit" value="Add" className="srchbtn" />
        </form>
    );
}
