import React from 'react'

import "../App.css";

export default function TripCard(props) {
    return (
        <div className="trip-card">
            <p>Name: {props.name}</p>
            <img alt="Trip"></img>
            <p>Location: {props.location}</p>
            <p>Start date: {props.startDate}</p>
            <p>End date: {props.endDate}</p>
            <p>Category: {props.category}</p>
            <p>Length: {props.length} </p>
            <p>Difficulty: {props.difficulty}</p>
            <p>Rating: {props.rating}</p>
        </div>
    );
}
