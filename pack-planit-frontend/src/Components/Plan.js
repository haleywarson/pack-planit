import React, { useState } from "react";

import "../App.css";

const tripsUrl = "http://localhost:9393/trips"

export default function Plan() {
    const [values, setValues] = useState({
        name: "",
        location: "",
        image: "",
        startDate: "",
        endDate: "",
        category: "",
        miles: 0,
        difficulty: "",
        rating: 0,
        notes: ""
    });

    const handleInputChange = (event) => {
        event.persist();
        const name = event.target.name;
        const value = event.target.value;
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting...")
        const name = event.target.name
        const value = event.target.value
        const newValues = setValues({ [name]: value });
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newValues)
        }
        fetch(tripsUrl, options)
    };

    return (
        <div className="plan-container">
            <form className="plan-form" onSubmit={handleSubmit}>
            <h1>Log a trip</h1>

            <label htmlFor="name">Trip name</label>
            <input
                id="name"
                className="form-field"
                type="text"
                placeholder=""
                name="name"
                value={values.name || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="location">Trip location</label>
            <input
                id="location"
                className="form-field"
                type="text"
                placeholder=""
                name="location"
                value={values.location || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="image">Trip image</label>
            <input
                id="image"
                className="form-field"
                type="text"
                placeholder="image url"
                name="image"
                value={values.image || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="startDate">Start date</label>
            <input
                id="startDate"
                className="form-field"
                type="date"
                placeholder="Start date"
                name="startDate"
                value={values.startDate || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="endDate">End date</label>
            <input
                id="endDate"
                className="form-field"
                type="date"
                placeholder="End date"
                name="endDate"
                value={values.endDate || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="category">Category (i.e. backpacking/camping)</label>
            <input
                id="category"
                className="form-field"
                type="text"
                placeholder=""
                name="category"
                value={values.category || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="miles">Number of miles</label>
            <input
                id="miles"
                className="form-field"
                type="number"
                placeholder=""
                name="miles"
                value={values.miles || 0}
                onChange={handleInputChange}
            />

            <label htmlFor="difficulty">
                Difficulty (i.e. easy/moderate/difficult)
            </label>
            <input
                id="difficulty"
                className="form-field"
                type="text"
                placeholder=""
                name="difficulty"
                value={values.difficulty || ""}
                onChange={handleInputChange}
            />

            <label htmlFor="rating">
                Rating (1-5 stars, with 5 being the best)
            </label>
            <input
                id="rating"
                className="form-field"
                type="range"
                placeholder="Rating"
                name="rating"
                value={values.rating || 0}
                onChange={handleInputChange}
            />

            <label htmlFor="notes">Trip notes</label>
            <input
                id="notes"
                className="form-field"
                type="text"
                placeholder=""
                name="notes"
                value={values.notes || ""}
                onChange={handleInputChange}
            />

            <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}