import React from 'react'

import "../App.css";

import TripCard from "./TripCard"

export default function Trips() {
    return (
        <div className="trips">
            <h2>Trips</h2>
            <TripCard />
        </div>
    );
}
