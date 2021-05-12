import React from 'react'

export default function PackItCard(props) {
    return (
        <ul className="pack-it-list">
            <li className="pack-it-item">
                <p>{props.item} | {props.category}</p>
            </li>
        </ul>
    );
}
