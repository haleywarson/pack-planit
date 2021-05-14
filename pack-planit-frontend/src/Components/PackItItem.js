import React from 'react'

export default function PackItItem(props) {

    return (
        <li className="pack-it-item">
            <p>{props.item}</p>
        </li>
    );
}

            {/* <button className="delete" onClick={(event) => props.removeItem(props.item)}>
            Delete
            </button> */}