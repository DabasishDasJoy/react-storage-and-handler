import React from 'react';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Cosmetic;