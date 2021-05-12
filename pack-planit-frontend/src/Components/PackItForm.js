import React, { useState } from "react";

import PackItCard from "./PackItCard"

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
        console.log("adding list item...");
    };

    return (
        <div className="pack-it-container">
            <form className="pack-it-form" onSubmit={handleSubmit}>
                <h2>New PackIt List</h2>
                <label htmlFor="item">Item</label>
                    <input
                    type="text"
                    name="item"
                    value={item}
                    onChange={handleItemChange}
                    />
                <br />
                <label htmlFor="content">Category</label>
                    <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                    />
                <br />
                <input type="submit" value="Add item" />
            </form>
            <PackItCard item={item} category={category} />
        </div>
    );
}
