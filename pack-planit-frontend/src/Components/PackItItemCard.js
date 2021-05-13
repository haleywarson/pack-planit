import React from 'react'

export default function PackItItemCard(props) {
    
    const handleClick = (event) => {
        props.removeItem(props.item);
    };
    
    return (
      <li className="pack-it-item-card">
        <p>{props.item}</p>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </li>
    );
}
