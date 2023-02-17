import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom"
import './Nav.css'

export default function Nav({onSearch}) {
  return (
        <div className="nav">
          <div className="list">
          <Link to="/About" className="about">
          <p>About</p>
          </Link>
          </div>
        <SearchBar onSearch={onSearch}/>
        </div>
        )
        }