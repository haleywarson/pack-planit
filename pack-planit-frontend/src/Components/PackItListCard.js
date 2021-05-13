import React from "react";

import PackItItemCard from "./PackItItemCard"

export default function PackItListCard(props) {
    const handleClick = (event) => {
        props.removeList(props.list);
    };

      const showItems = () => {
        return props.items.map((item) => (
          <PackItItemCard
            item={item}
            removeItem={props.removeItem}
            addItem={props.addItem}
          />
        ));
      };

    return (
        
        <div className="pack-it-item-container">
                <ul className="pack-it-items">{showItems()}</ul>
        </div>
    );
}
