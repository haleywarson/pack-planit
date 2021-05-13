import React, { useState, useEffect } from "react";

import PackItForm from "./PackItForm"
import PackItCardContainer from "./PackItCardContainer"

const listsUrl = "http://localhost:9393/packit";

export default function PackItPage() {

    const [lists, setLists] = useState([])
    const [listId, setListId] = useState(0);

    useEffect(() => {
        fetch(listsUrl)
            .then((response) => response.json())
            .then((alllists) => setLists(alllists.lists));
    })

    const addList = (newList) => {
        let newListId = listId + 1;
        setLists({lists: [...lists, newList]})
        setListId({listId: [newListId]});
        fetch(listsUrl, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({id: newListId, ...newList}),
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

    return (
        <div className="pack-it-page">
            <PackItForm/>
            <PackItCardContainer 
                lists={lists} 
                removeList={removeList}
                addList={addList}
            />
        </div>
    )
}
