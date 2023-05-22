"use strict";

function choice(itemsArray){
    return itemsArray[Math.floor(Math.random() * itemsArray.length)]
}

function remove(itemsArray, itemRemove){
    
    for(let i = 0; i < itemsArray.length; i++){
        if(itemRemove === itemsArray[i]){
            itemsArray.splice(i, 1)
            return itemsArray
        }
    }

    return undefined
}

export {choice, remove} 