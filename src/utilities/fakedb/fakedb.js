const addToLocalStorageDirect = (id) =>{
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

const addToLocalStorage = (id) => {
    let shoppingCart; 

    //Check if exist in localStorage
    let savedCart = localStorage.getItem('shoppingCart');
    //If exist update that product
    if(savedCart){
        //grab that product and make mutable object
        shoppingCart = JSON.parse(savedCart);
    }
    //If not exist make that empty object
    else{
        shoppingCart = {};
    }

    //Update quantity
    const quantity = shoppingCart[id];
    //Now check if the clicked item is exist or not. if exist update the quantity
    if(quantity){
        shoppingCart[id] = quantity + 1;
    }
    else{
        shoppingCart[id] = 1; 
    }
    //lastly set the shoppingCart object to the localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const removeFromLocalStorage = (id) => {
    //Check
    const storedCart = localStorage.getItem('shoppingCart');
    
    //if exist
    if(storedCart){
        //grab it
        const shoppingCart = JSON.parse(storedCart);

        //check if the target id is exist or not
        if(id in shoppingCart){
            //Update the object
            delete shoppingCart[id];
            //add the object to the db
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}

const getTotalPrice = products =>{
    const total = products.reduce((pre, curr) => pre + curr.price, 0);
    return total;
}
export {
    addToLocalStorage,
    addToLocalStorageDirect,
    removeFromLocalStorage,
    getTotalPrice as totalPrice
};

