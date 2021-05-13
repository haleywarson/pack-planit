import React, { useState} from "react";

import PackItForm from "./PackItForm"
import PackItListContainer from "./PackItListContainer"

// const listsUrl = "http://localhost:9393/packit";

export default function PackItPage() {
    
    const [lists, setLists] = useState([])
    const [listName, setListName] = useState([])
    const [items, setItems] = useState([]);
    
    const addList = (newList) => {
        setLists(newList)
        // fetch(listsUrl, {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newList)
        // })
    }

    const addItem = (newItem) => {
        setItems(...items, newItem)
    };

    const handleItemChange = (event) => {
        event.persist();
        const newItem = event.target.value
        setItems(newItem)
    };

    const handleListNameChange = (event) => {
        event.persist();
        const newListName = event.target.value
        setListName(newListName)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("adding list item...");
    };

    const removeItem = (itemToRemove) => {
        let filteredItems = items.filter((item) => {
            return item !== itemToRemove;
        });
        setItems(filteredItems);
    };

    return (
        <div className="pack-it-page">
            <PackItForm 
                items = {items}
                handleItemChange = {handleItemChange}
                handleListNameChange = {handleListNameChange}
                handleSubmit = {handleSubmit}
                addItem = {addItem}
                listName = {listName}
            />
            <PackItListContainer 
                listName = {listName}
                lists={lists} 
                // removeList={removeList}
                addList={addList}
                removeItem ={removeItem}
                items={items}
            />
        </div>
    )
}

    // const [itemId, setItemId] = useState(0)
    // const [listId, setListId] = useState(0);
    
    // useEffect(() => {
    //     fetch(listsUrl)
    //     .then((response) => response.json())
    //     .then((alllists) => setLists(alllists.lists)
    //     )
    // }, [])
    
    // const removeList = (listToRemove) => {
    //     let filteredLists = lists.filter((list) => {
    //         return list !== listToRemove;
    //     });
    //     setLists(filteredLists);
    //     fetch(listsUrl + listToRemove.id, {
    //         method: "DELETE",
    //     });
    // };

        // let newListId = listId + 1;
        // setListId(newListId);