//Import from node_modules
import React from 'react';
import { additon, multiplication } from '../../utilities/Calculation/Calculation';

const Shoes = (props) => {
    return (
        <div>
            <h1>Hello From Shoes</h1>
            <p>Price: {props.price}</p>
            <p>Addition : {additon(500, 80)}</p>
            <p>Multiplication: {multiplication(500, 5)}</p>
        </div>
    );
};

export default Shoes;