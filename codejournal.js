/* Variables - containers that store values
this is a multi-line comment
I can keep adding lines to this*/


var name; // a declared variable, but not initialized and it's in the global scope (BAD)

let foo; // a declared variable that can be changed

//const bar; //a declared variable that cannot be changed - short for 'constant'

const ANSWER = 42; // const is declared and initialized with the value 42
// Strings

let string1 = "Hello World!" // this is a 'string literal' example and the preffered way - 'THis is the way'

let string2 = new String("Hello World!") // using a 'constrructor'

// Number

let myNum = 234567787;

let myDecimal = 73.4 // could also call this a 'float'

// Boolean

let myBool = true;

// Array

let myArray = [] // this is an empty array

//              0     1       2       3      4
let myArray2 = [42, "Bob", myBool, ANSWER, true];

const myCar = {
    make: "Chevrolet",
    color: "Red",
    year: "1965",
}