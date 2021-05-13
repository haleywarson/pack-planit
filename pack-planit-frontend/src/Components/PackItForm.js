import React from "react";

export default function PackItForm(props) {

    return (
        <form className="pack-it-form" onSubmit={props.handleSubmit}>
            <label htmlFor="listName">Packing list name</label>
            <input
                type="text"
                name="listName"
                value={props.listName}
                onChange={props.handleListNameChange}
            />
            <label htmlFor="item">Item</label>
            <input
                type="text"
                name="item"
                value={props.items}
                onChange={props.handleItemChange}
            />
            <br/>
            <input type="submit"/>
        </form>
    );
}
