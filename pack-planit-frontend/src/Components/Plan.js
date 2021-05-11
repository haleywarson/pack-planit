import React, { useState } from "react";

import "../App.css";

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
        console.log("submitted")
        setValues({
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <div className="plan-container">
            <form className="plan-form" onSubmit={handleSubmit}>
                <h1>Log a trip</h1>

                <label for="name">Trip name</label>
                <input
                id="name"
                className="form-field"
                type="text"
                placeholder=""
                name="name"
                value={values.name}
                onChange={handleInputChange}
                />

                <label for="location">Trip location</label>
                <input
                id="location"
                className="form-field"
                type="text"
                placeholder=""
                name="location"
                value={values.location}
                onChange={handleInputChange}
                />

                <label for="image">Trip image</label>
                <input
                id="image"
                className="form-field"
                type="text"
                placeholder="image url"
                name="image"
                value={values.image}
                onChange={handleInputChange}
                />

                <label for="startDate">Start date</label>
                <input
                id="startDate"
                className="form-field"
                type="date"
                placeholder="Start date"
                name="startDate"
                value={values.startDate}
                onChange={handleInputChange}
                />

                <label for="endDate">End date</label>
                <input
                id="endDate"
                className="form-field"
                type="date"
                placeholder="End date"
                name="endDate"
                value={values.endDate}
                onChange={handleInputChange}
                />

                <label for="category">Category (i.e. backpacking/camping)</label>
                <input
                id="category"
                className="form-field"
                type="text"
                placeholder=""
                name="category"
                value={values.category}
                onChange={handleInputChange}
                />

                <label for="miles">Number of miles</label>
                <input
                id="miles"
                className="form-field"
                type="number"
                placeholder=""
                name="miles"
                value={values.miles}
                onChange={handleInputChange}
                />

                <label for="difficulty">
                Difficulty (i.e. easy/moderate/difficult)
                </label>
                <input
                id="difficulty"
                className="form-field"
                type="text"
                placeholder=""
                name="difficulty"
                value={values.difficulty}
                onChange={handleInputChange}
                />

                <label for="rating">
                Rating (1-5 stars, with 5 being the best)
                </label>
                <input
                id="rating"
                className="form-field"
                type="range"
                placeholder="Rating"
                name="rating"
                value={values.rating}
                onChange={handleInputChange}
                />

                <label for="notes">Trip notes</label>
                <input
                id="notes"
                className="form-field"
                type="text"
                placeholder=""
                name="notes"
                value={values.notes}
                onChange={handleInputChange}
                />

                <input type="submit" value="Submit"></input>
            </form>
            </div>
        </>
    );
}