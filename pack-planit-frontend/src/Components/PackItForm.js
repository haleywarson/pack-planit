import React, { useState } from "react";

export default function PackItForm() {

    const [item, setItem] = useState("")
    const [category, setCategory] = useState("");

    const handleItemChange = (event) => {
        setItem({
            item: event.target.value,
        })
    };

    const handleCategoryChange = (event) => {
        setCategory({
            category: event.target.value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting list item...");
        // const options = {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(item, category),
        // };
        // fetch(tripsUrl, options);
    };

    return (
        <form className="pack-it-form">
            <h2>New PackIt List</h2>
            <label htmlFor="item">Item</label>
            <input
            type="text"
            name="item"
            value={item.value}
            onChange={handleItemChange}
            />
            <br />
            <label htmlFor="content">Category</label>
            <input
            type="text"
            name="category"
            value={category.value}
            onChange={handleCategoryChange}
            />
            <br />
            <input type="submit" value="Add item" />
        </form>
    );
}
