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


/**
 *  Practice Q:
 *      - Create a function that gives us average of 3 numbers
*/
function avg (n1, n2, n3) {
    console.log((n1+n2+n3)/3);
}
avg(3, 5, 7)


/**
 * Practice Q:
 *      - Create a function that will orint the multiplication table of a number
*/
function multiplicationTable (n) {
    for (let i=1; i<=10; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
multiplicationTable (7);


/**
 *  ## return
        - in general terms, a function will take some input, works on it & then gives us the output
        - in terms of prgramming language,
            - inputs → arguments
            - processing → block of code
            - output → ?
        - This output is given by a keyword called `return`

    ## return (vs) break
        - `break` → it exits the block of code without executing the code below
        - `return` → it exits the block of code without executing the code below & returns value
*/

/**
 *  Practice Q:
 *      - Create a function that returns sum of numbers from 1 to n
*/
function sum1_n (n) {
    let sum = 0;

    for (let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
}
console.log(sum1_n(10));

/**
 *  Practice Q:
 *      - Create a function that returns concatination of all the strings in an array
*/
function array_string_concat (arr) {
    let str = "";
    for (let i=0; i<arr.length; i++) {
        str = str + arr[i];
    }
    return str;
}


/**
 *  Scope:
 *      - scope determines accessibility/availability of variables, objects & functions from different parts of code.
 *      - There are 3 types of scopes
 *          - function scope → Var defined inside the function are NOT accessible outside the function
 *          - block scope -> var defines inside the { } are NOT accessible outside the { }
 *                  - But this scope deosn't applicable on variables defined using "var" keyword
 *          - Lexical Scope -> - Var defined outside a function can be accessible inside another function defined after the var declaration
 *                  - The opposite is NOT true
*/

// function scope
let add = 5; // global scope

function functionBlock (n1, n2) {
    let add = n1+n2; // function scope
    return add;
}

console.log(functionBlock(2, 5)); // 7 [without error]
console.log(add); //5

// block scope
{
    var h = "H";
    let k = "k";
}
console.log(h); // H -> since block scope is NOT valid for var keywords
console.log(k); //error -> due to block scope

/**
 *  - If there is clash between global & function scope
 *  - Always "function" scope wins
*/

//lexical scope
function outerFn () {
    let x = 10;
    let y = 20;

    function innerFn () {
        console.log(x);
        console.log(y);
    }
    innerFn();
}

outerFn(); // prints both the values of x & y

function outerFn1 () {
    function innerFn1 () {
        console.log(x); //lexical scope
        console.log(y); //lexical scope
    }

    let x = 10;
    let y = 20;
    innerFn1();
}
outerFn1(); // prints both the values of x & y -> Due to Hoisting


/**
 *  Function Expressions:
 *      - Function as expressions are called Function Expressions
*/
let hello = function() {
    console.log("Hello");
};

hello(); // Hello
/**
 *  - Here, hello -> A variable & behaves like a normal varaible
 *  - function is a nameless function & it is assigned to a variale called hello
 *  - This type of assigning a nameless fn to a variable is termed as Function Expression.
*/
hello = 10;
console.log(hello); //10