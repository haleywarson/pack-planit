import React from 'react'

import "../App.css";

export default function TripCard(props) {
    return (
        <div className="trip-card">
            <img alt="Trip" src={props.image}></img>
            <p>{props.name}</p>
            <p>Location: {props.location}</p>
            <p>Start date: {props.start_date}</p>
            <p>End date: {props.end_date}</p>
            <p>Category: {props.category}</p>
            <p>Miles: {props.miles} </p>
            <p>Difficulty: {props.difficulty}</p>
            <p>Rating: {props.rating}</p>
            <p>Notes: {props.notes}</p>
        </div>
    );
}