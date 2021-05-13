import React from 'react'

import PackItList from './PackItList'

export default function PackItListContainer(props) {

    const displayList = () => {
        return props.lists.map((list) => (
            <PackItList
                listName = {props.listName}
                key={list.id}
                lists={props.lists}
                addList={props.addList}
                items={props.items}
                // removeList={props.removeList}
            />
        ));
    }

    return (
        <div className="pack-it-list-container">
            <h2>Packing List: {props.listName}</h2>
            {displayList()}
        </div>
    );
}