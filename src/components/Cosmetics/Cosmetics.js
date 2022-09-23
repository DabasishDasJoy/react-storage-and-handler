import React from 'react';
//This is default import
// import addition from '../../utilities/Calculation/Calculation';
//this is object import
import { additon, multiplication } from '../../utilities/Calculation/Calculation';
import "./Cosmetics.css";

const Cosmetics = (props) => {

    //to use the addition funtion expression we need to import that file. 
    const result = additon(50, 60);
    const multiRes = multiplication(10, 5);
    return (
        <div>
            <h1>Hello From Cosmetics</h1>
            <p>Price: {props.price}</p>
            <p>Result: {result}</p>
            <p>Mul: {multiRes}</p>
        </div>
    );
};

//Exporting the file default
export default Cosmetics;