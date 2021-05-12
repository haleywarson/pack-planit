import React, { useState } from "react";

import PackingListCard from './PackingListCard'

export default function PackingListForm() {

    const [items, setItems] = useState({
        title: "",
        content: "",
    })

    const handleChange = (event) => {
        setItems({
        [event.target.name]: event.target.value,
        });
    };

    return (
        <form className="packing-list-form">
        <h2>New Packing List</h2>
        <label>Title</label>
        <input
            type="text"
            name="title"
            value={items.title}
            onChange={handleChange}
        />
        <label>Content</label>
        <input
            type="text"
            name="content"
            value={items.content}
            onChange={handleChange}
        />
        <input type="submit" value="Add item" />
        </form>
    );
    }
