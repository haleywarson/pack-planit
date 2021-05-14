import React, { useState} from "react";

import PackItForm from "./PackItForm"
import PackItListContainer from "./PackItListContainer"

const listsUrl = "http://localhost:9393/packit";

export default function PackItPage() {
    
    const [lists, setLists] = useState([])
    const [listName, setListName] = useState([])
    const [items, setItems] = useState([]);
    
    const addItem = (newItem) => {
        setItems(newItem)
    };
    
    const handleListNameChange = (event) => {
        event.persist();
        const newListName = event.target.value
        setListName(newListName)
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = event.target.item.value
        setItems([...items, newItem])
        event.target.item.value = ""
    };
    
    const removeItem = (itemToRemove) => {
        let filteredItems = items.filter((item) => {
            return item !== itemToRemove;
        });
        setItems(filteredItems);
    };
    
    const addList = () => {
        setLists(items)
        fetch(listsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": listName, 
                "list": items
            })
        })
    }

    const removeList = (listToRemove) => {
        let filteredLists = lists.filter((list) => {
            return list !== listToRemove;
        });
        setLists(filteredLists);
        fetch(listsUrl + listToRemove.id, {
            method: "DELETE",
        });
    };

    return (
        <div className="pack-it-page">
            <PackItForm 
                items = {items}
                handleListNameChange = {handleListNameChange}
                handleSubmit = {handleSubmit}
                addItem = {addItem}
                listName = {listName}
                />
            <PackItListContainer 
                listName = {listName}
                lists={lists} 
                addList={addList}
                removeItem ={removeItem}
                items={items}
                // removeList={removeList}
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
        
        // handleItemChange = {handleItemChange}
        
        // let newListId = listId + 1;
        // setListId(newListId);