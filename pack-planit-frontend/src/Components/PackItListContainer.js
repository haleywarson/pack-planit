import React from 'react'

import PackItList from './PackItList'

export default function PackItListContainer(props) {

    const showList = () => {
        return props.lists.map((list) => (
            <PackItList
                key={list.id}
                lists={props.lists}
                removeList={props.removeList}
                addList={props.addList}
                items={props.items}
            />
        ));
    }

    return (
        <div className="pack-it-list-container">
            <h2>Packing List</h2>
            {showList()}
        </div>
    );
}