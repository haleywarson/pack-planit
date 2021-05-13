import React from 'react'

import PackItListCard from './PackItListCard'

export default function PackItCardContainer(props) {

    // const showList = () => {
    //     return props.lists.map((list) => (
    //         <PackItListCard
    //             list={list}
    //             removeList={props.removeList}
    //             addList={props.addList}
    //         />
    //     ));
    // }

    // const removeItem = (itemToRemove) => {
    //     let filteredItems = items.filter((item) => {
    //         return item !== itemToRemove;
    //     });
    //     setItems({ items: filteredItems });
    // };

    return (
        <div className="pack-it-card-container">
            <div className="pack-it-list-container">
                {/* {showList()} */}
            </div>
        </div>
    );
}