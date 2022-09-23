const addToLocalStorage = (id) =>{
    /* Check if that id is exist 
        if exist increase the value or quantity of the item
        else add it
    */

    const quantity = localStorage.getItem(id);
    if(quantity){
        localStorage.setItem(id, +quantity + 1);
    }
    else{
        localStorage.setItem(id, 1);
    }
}

export { addToLocalStorage };

