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
            startDate={trip.startDate}
            endDate={trip.endDate}
            category={trip.category}
            miles={trip.miles}
            difficulty={trip.difficulty}
            rating={trip.rating}
            notes={trip.notes}
        />
    ));

    return (
        <div className="trips">
            <h2 className="trips-title">Trips</h2>
            <div className="trips-filter">
                <h3 className="trips-upcoming-title">Upcoming</h3>
                <h3 className="trips-past-title">Past</h3>
            </div>
            {displayTrips()}
        </div>
    );
}
