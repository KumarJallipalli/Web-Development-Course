/**
 *                                              12th Feb 2023
*/

/**
 *  Function:
 *      - Function is a block of code used to perform a specific task
 *      - Syntax: 
 *              function name () { block of code };
*/

//Defining a hello function
function hello () {
    console.log("Hello..!, How are you");
}

// calling the hello function => Executing the function
hello();

/**
 *  Practice Q:
 *      - Create a function to roll a dice, & display the value (1 - 6)
*/
function rollDice () {
    let value = Math.floor( Math.random()*6 ) + 1;
    console.log(value);
}

rollDice();


/**
 *  - `parameters` are the variables declared inside ( ) during function definition
 *  - `arguments` are the values passed inside ( ) during function calling  
*/
function sum (parameter1, parameter2) {
    console.log(parameter1+parameter2);
}

sum(4, 8); //4, 8 are the argument1 & 2 respectively