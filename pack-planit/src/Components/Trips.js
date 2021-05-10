import React from 'react'

import "../App.css";

import TripCard from "./TripCard"

export default function Trips() {

    // fetch data for cards here
    return (
        <div className="trips">
            <h2 className="trips-title">Trips</h2>
            <div className="trips-filter">
                <h3 className="trips-upcoming-title">Upcoming</h3>
                <h3 className="trips-past-title">Past</h3>
            </div>
            <TripCard />
        </div>
        );
}
