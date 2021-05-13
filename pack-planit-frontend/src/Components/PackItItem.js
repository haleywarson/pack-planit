import React from 'react'

export default function PackItItem(props) {
    
    const handleClick = (event) => {
        props.removeItem(props.item);
        console.log("deleting item!")
    };

    return (
        <li className="pack-it-item">
            <p>{props.item}</p>
            <button className="delete" onClick={handleClick}>
            Delete
            </button>
        </li>
    );
}
