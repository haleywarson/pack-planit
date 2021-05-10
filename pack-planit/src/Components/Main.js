import React from 'react'

import "../App.css";

import Trips from "./Trips"

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-content">
                    <h2>Adventure Awaits</h2>
                    <h3>Your next trip is waiting for you... time to plan it.</h3>
                    <button>Plan your trip</button>
                </div>
            </div>
            <div className="trips-container">
                <Trips />
            </div>
        </div>
    );
}
