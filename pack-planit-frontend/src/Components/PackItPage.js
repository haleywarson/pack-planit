import React, { useState, useEffect } from "react";

import PackItForm from "./PackItForm"
import PackItListContainer from "./PackItListContainer"

const listsUrl = "http://localhost:9393/packit";

export default function PackItPage() {
    
    const [lists, setLists] = useState([])
    // const [listId, setListId] = useState(0);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(listsUrl)
        .then((response) => response.json())
        .then((alllists) => setLists(alllists.lists)
        )
    }, [])
    
    const addList = (newList) => {
        // let newListId = listId + 1;
        setLists({lists: [...lists, newList]})
        // setListId({listId: [newListId]});
        fetch(listsUrl, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newList
            })
        })
    }
    
    const removeList = (listToRemove) => {
        let filteredLists = lists.filter((list) => {
            return list !== listToRemove;
        });
        setLists({lists: filteredLists});
        fetch(listsUrl + listToRemove.id, {
            method: "DELETE",
        });
    };

    const addItem = (newItem) => {
    setItems({
        items: [...items, newItem],
    });
    };

    const handleItemChange = (event) => {
        const newItem = event.target.value;
        setItems({
            items: [...items, newItem],
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("adding list item...");
    };

    const removeItem = (itemToRemove) => {
        let filteredItems = items.filter((item) => {
            return item !== itemToRemove;
        });
        setItems({items: filteredItems});
    };

    return (
        <div className="pack-it-page">
            <PackItForm 
                items = {items}
                handleItemChange = {handleItemChange}
                handleSubmit = {handleSubmit}
                addItem = {addItem}
            />
            <PackItListContainer 
                lists={lists} 
                removeList={removeList}
                addList={addList}
                removeItem ={removeItem}
                items={items}
            />
        </div>
    )
}
