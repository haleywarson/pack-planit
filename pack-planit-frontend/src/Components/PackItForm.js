import React, { useState } from "react";

export default function PackItForm(props) {

    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems({
            items: [...items, newItem],
        });
    };
    
    const handleChange = (event) => {
        const newItem = event.target.value
        setItems({
            items: [...items, newItem]
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("adding list item...");
    };

    return (
        <form className="pack-it-form" onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input
                type="text"
                name="item"
                value={items}
                onChange={handleChange}
            />
            <br/>
            <input type="submit" value="Add item" id="button" onClick={addItem}/>
        </form>
    );
}
