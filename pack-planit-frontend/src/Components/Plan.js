import React, { useState } from "react";

import "../App.css";

export default function Plan() {
    const [values, setValues] = useState({
        tripName: "",
        tripLocation: "",
        tripType: "",
    });
    // const [submitted, setSubmitted] = useState(false);
    // const [valid, setValid] = useState(false);

    const handleInputChange = (event) => {
        event.persist();
        let newValue = event.target.value
        setValues({
            [event.target.name]: [ ...values, newValue ]
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted")
        // if (values.tripName && values.tripLocation && values.tripType) {
        //     setValid(true);
        // }
        // setSubmitted(true);
        // showSuccess();
        };

    // const showSuccess = () => {
    //     return (
    //         <div className="success-message">
    //             <p>You are on your way to planning your trip!</p>
    //         </div>
    //     )
    // }

    return (
        <>
            <div className="plan-container">
                <form className="plan-form" onSubmit={handleSubmit}>
                    <h1>Plan a trip</h1>

                    <input
                    id="trip-name"
                    className="form-field"
                    type="text"
                    // disabled={showSuccess}
                    placeholder="Trip name"
                    name="tripName"
                    value={values.tripName}
                    onChange={handleInputChange}
                    />
                    {/* {submitted && !values.tripName && (
                    <span id="trip-name-error">Please enter a trip name.</span>
                    )} */}

                    <input
                    id="trip-location"
                    className="form-field"
                    type="text"
                    placeholder="Trip location"
                    name="tripLocation"
                    value={values.tripLocation}
                    onChange={handleInputChange}
                    />
                    {/* {submitted && !values.tripLocation && (
                    <span id="trip-location-error">
                        Please enter a trip location.
                    </span>
                    )} */}

                    <input
                    id="trip-type"
                    className="form-field"
                    type="text"
                    placeholder="Trip type"
                    name="tripType"
                    value={values.tripType}
                    onChange={handleInputChange}
                    />

                    <input type="submit" value="Submit"></input>
                    
                    {/* {submitted && !values.tripType && (
                    <span id="trip-type-error">Please enter a trip type.</span>
                    )} */}
                </form>
            </div>
        </>
    );
}

// t.string :name
//       t.string :location
//       t.date :start_date
//       t.date :end_date
//       t.string :category
//       t.integer :length
//       t.string :difficulty
//       t.integer :rating
//       # add image url
//       # add notes section
//       # add foreign key?