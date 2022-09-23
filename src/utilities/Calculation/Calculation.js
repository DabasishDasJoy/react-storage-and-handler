const additon = (first, second) => first + second;
const multiplication = (first, second) => first * second;


/* To use this file we need to import this file where we want to apply. To import the file nedd to be exported first. 
*/

/* 
    Export can be done in various ways: 
*/

//1: When only one thing we want to import
// export default additon;

//2: When multiple codes exports

/* 
    This exportation is as objects so import should be as object
*/
export { additon, multiplication };


