import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card ({min, max, name, img, onClose, weather, id}) {
  return (
    <div className="card">
      <div className='btncntr'>
          <button onClick={onClose}  className ="btn" >X</button>
      </div>
      <div className='crdname'>
        <Link to={`/City/${id}`} id="crdlnk">
        <h5 >{name}</h5>
        </Link>
        <div >
          <div className='temp'>
          <div className='min'>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className='max'>
            <p>Max</p>
            <p>{max}°</p>
          </div>
          </div>
          <div  className="img">
            <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="" />
          </div>
          <div className='weather'>
            <p>{weather}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
