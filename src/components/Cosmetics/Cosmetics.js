import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/fakedb/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';
/* -> This is default import
import addition from '../../utilities/Calculation/Calculation';
-> this is object import
import { additon, multiplication } from '../../utilities/Calculation/Calculation'; */


const Cosmetics = (props) => {

    /* to use the addition funtion expression we need to import that file. 
    const result = additon(50, 60);
    const multiRes = multiplication(10, 5); 
    */

    //Fake data creation from json generator
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() =>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);
    const total = totalPrice(cosmetics);

    return (
        <div>
            <h1>Hello From Cosmetics</h1>
            <h2>Total Price: {total}</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    cosmetic={cosmetic} 
                    key={cosmetic.id}
                    ></Cosmetic>)
            }
        </div>
    );
};

//Exporting the file default
export default Cosmetics;