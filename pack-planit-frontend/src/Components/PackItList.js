import React from "react";

import PackItItem from "./PackItItem"

export default function PackItList(props) {

    const showItems = () => {
        return props.items.map((item) => (
            <PackItItem
                item={item}
                removeItem={props.removeItem}
            />
        ));
    };

    return (
        <div className="pack-it-list">
            <h3>{props.listName}</h3>
            <ul>{showItems()}</ul>
            {/* <button className="delete-list" onClick={(event) => props.removeList(event.target)}>
            Delete
            </button> */}
            <button className="create-list" onClick={(event) => props.addList(event.target)}>
            Add list
            </button>
        </div>
    );
}
