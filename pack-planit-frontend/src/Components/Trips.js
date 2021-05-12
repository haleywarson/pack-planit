import React, {useState, useEffect} from 'react'

import "../App.css";

import TripCard from "./TripCard"

const tripsUrl = "http://localhost:9393/trips";

export default function Trips() {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch(tripsUrl)
        .then((response) => response.json())
        .then((data) => setTrips(data.trips) )
    }, [])

    const displayTrips = () => trips.map((trip) => (
        <TripCard
            key={trip.id}
            name={trip.name}
            location={trip.location}
            image={trip.image}
            start_date={trip.start_date}
            end_date={trip.end_date}
            category={trip.category}
            miles={trip.miles}
            difficulty={trip.difficulty}
            rating={trip.rating}
            notes={trip.notes}
        />
    ));

    return (
        <div className="trips-container">
            <h2 className="trips-title">Trip log</h2>
            <div className="trips-list">{displayTrips()}</div>
        </div>
    );
}
