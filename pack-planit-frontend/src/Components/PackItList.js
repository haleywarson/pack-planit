import React from "react";

import PackItItem from "./PackItItem"

export default function PackItList(props) {

    const showItems = () => {
        return props.items.map((item) => (
            <PackItItem
                items={props.items}
                removeItem={props.removeItem}
            />
        ));
    };

    return (
        <div className="pack-it-list">
            <ul>{showItems()}</ul>
            <button className="delete-list" onClick={() => props.removeList(props.list)}>
            Delete
            </button>
            <button className="create-list" onClick={() => props.addList(props.list)}>
            Complete list
            </button>
        </div>
    );
}
