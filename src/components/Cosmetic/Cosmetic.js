import React from 'react';
import { addToLocalStorage } from '../../utilities/fakedb/fakedb';
import "./Cosmetic.css";

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    // Cart handler
    const addToCart = (id) =>{
        /* 
            To add item to cart we need to access a database. For that we can create a database or fakedb by accessing localStorage. 
        */

        //Declare a function that addes item to local storage in the uitlities. 
        addToLocalStorage(id);
    }
    return (
        <div className='product'>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            {/* 
                Here to find out which item is clicked we need to send a unique key or id to indicate that item. For that we need to pass params. But in REACT we cannot set parameter in event hanlder function as () -> immediately calls the function first execution. This is a behavior of JSX. For that reason we just add the function name and hook that functin up with the button or element. 

                To achieve a event handler call with params we need to declare a arrow function to call the target handler function. 
                That is an arrow func ()=> will call the handler functin with params. 

                Just like this: 

                Const addToCartWithOutParams = () => addToCart(id); 
                

                button -> onClick = {addTocartWithOutParams}
            */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;