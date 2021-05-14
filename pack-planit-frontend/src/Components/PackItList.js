import React from "react";

import PackItItem from "./PackItItem"

export default function PackItList(props) {

    const showItems = () => {
        return props.items.map((item) => (
            <PackItItem
                item={item}
                removeItem={props.removeItem}
                key={item.id}
            />
        ));
    };

    return (
        <div className="pack-it-list">
            <ul>{showItems()}</ul>
            <button 
                className="create-list" 
                onClick={(event) => props.addList(event.target)}
            >Complete list</button>
        </div>
    );
}

            /* <button className="delete-list" onClick={(event) => props.removeList(event.target)}>
            Delete
            </button> */