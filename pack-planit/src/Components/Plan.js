import React, { useState } from "react";


import "../App.css";

export default function Plan() {
    const [values, setValues] = useState({
        tripName: "",
        tripLocation: "",
        tripType: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleTripNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            tripName: event.target.value,
        }));
    };

    const handleTripLocationChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            tripLocation: event.target.value,
        }));
    };

    const handleTripTypeChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            tripType: event.target.value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.tripName && values.tripLocation && values.tripType) {
            setValid(true);
        }
        setSubmitted(true);
        };

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
                onChange={handleTripNameChange}
                />
                {submitted && !values.tripName && (
                <span id="trip-name-error">Please enter a trip name.</span>
                )}

                <input
                id="trip-location"
                className="form-field"
                type="text"
                placeholder="Trip location"
                name="tripLocation"
                value={values.tripLocation}
                onChange={handleTripLocationChange}
                />
                {submitted && !values.tripLocation && (
                <span id="trip-location-error">
                    Please enter a trip location.
                </span>
                )}

                <input
                id="trip-type"
                className="form-field"
                type="text"
                placeholder="Trip type"
                name="tripType"
                value={values.tripType}
                onChange={handleTripTypeChange}
                />

                <input type="submit" value="Submit"></input>
                
                {submitted && !values.tripType && (
                <span id="trip-type-error">Please enter a trip type.</span>
                )}
            </form>
            </div>
            {/* {showSuccess && <div className='success-message'>Success! Thank you for registering</div>} */}
        </>
    );
}
