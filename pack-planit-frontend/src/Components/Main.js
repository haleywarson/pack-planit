import React from 'react'

import "../App.css";

import Trips from "./Trips"

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-content">
                    <h2>ADVENTURE AWAITS</h2>
                    <h3>Your next camping trip is waiting for you...time to plan it.</h3>
                    <button>PLAN YOUR TRIP</button>
                </div>
            </div>
            <div className="trips-container">
                <Trips />
            </div>
        </div>
    );
}
