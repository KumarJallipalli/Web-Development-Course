/**
 *  this:
 *      - this keyword refers to an Object that is currently executing
 */
// const student = {
//     maths: 100,
//     phy: 99,
//     che: 98,
//     avg() {
//         let avg = (maths+phy+che)/3;
//         console.log(avg);
//     }
// };
// student.avg(); // this gives an error saying maths, phy & che is not defined
/**
 *  So, to make those avaiable inside the avg function, we use this keyword
 *  ex: (this.maths+this.phy+this.che)/3 => similar to student.maths
*/

const student = {
    maths: 100,
    phy: 99,
    che: 98,
    avg() {
        let avg = (this.maths+this.phy+this.che)/3;
        console.log(avg);
    }
};
student.avg() // gives the o/p

/**
 *  - The `this` keyword refers to different objects depending on how it is used:
            - In an obj method, this refers to that current obj
            - Alone, this refers to global obj called window
            - in a function, this refers to global obj called window
            - in a function, in strickt mode, this is undefined
            - in an event, this refers to element that received the event
*/


/**
 *  try & catch:
 *      - `try` → try statement allows us to define a block of code to test for errors while it (the block of code) is being executed.
 *      - `catch` → catch statement allows us to define a block of code to be executed, if an error occurs in try block
*/

//case-1
console.log("Hello");
console.log("Hello");
console.log(a);
console.log("Hello2");
console.log("Hello2");

//case-2
console.log("Hello");
console.log("Hello");
try {
    console.log(a);     // this will give us error as 'a' is NOT defined 
} catch {
    console.log("Variable 'a' is NOT defined");     // this will catch that error
}
console.log("Hello2");
console.log("Hello2");

/**
 * The diff between case-1 & case-2 is:
 *      - case-1 will throw an error & stop the execution at the error itslef
 *      - in real life cases, this means crashing a website once an error occurs
 *      - But in case-2, it will print the log message of error & continue execution
*/


/**
 *  Arrow Function:
 *      - It replaces the `function` keyword with an `⇒`
        - It was introduced in ES6
        - It makes function sysntax shorter [that’s it]
*/
//normal function
function sum1 (a, b) {
    return a+b;
};

//function as an expression
let sum2 = function(a, b) {
    return a+b;
};

//arrow function
let sum3 = (a, b) => {
    return a+b;
}
/**
    - for single statements we can also remove the Curly braces { }
    - arrow functions are similar to functions as an expression
    - We can ignore the parenthesis, if argument is only 1
    - we can ignore curly braces, if statement is only one.
*/


/**
 * Implicit return:
 *      - if there is only one statement in the arrow function’s block of code
        - And that statement is not a printing statement or calculation statement & so on..
        - But only a return statement, then we can write it without return keyword also
        - This is called automatic return (or) implicit return
*/

let cube = n => n*n*n; // an arrow function for cubing a number
/**
 *  - here, we removed parenthesis, curly braces & return keyword
 *  - In this way, arrow function is used to shorter the syntax
 */

/**
 * setInterval:
 *  - It is a Higher Order function
    - It will have 2 parameers, 1st → function & 2nd → time interval [ms]
    - It will execute the function in an infinite loop with time interval given as a 2nd argument.
 *  - setTimeout → is similar to setInterval but executes only 1 time [ after the specified time interval ]
 */
let id = setInterval( () => {console.log("Hello")}, 2000);
console.log(id);
clearInterval(id);
/**
 *  - here, id will store the ID of setInterval function
 *  - ClearInterval function will stop the setInterval function corresponding to that ID
*/


/**
 *  this keyword with arrow functions
 *      - In regular functions, the `this` keyword represents the object which calls the function
 *      - With arrow functions, the `this` keyword *always* represents the parent object which calls the arrow functon ⇒ lexical scope
*/
const stud = {
    name: "Apple",
    age: 6,
    grade: 'A',
    getName: function() {
        console.log(this); // this -> stud
        return this.name;  // this.name -> stud.name == Apple
    },
    getGrade: () => {
        console.log(this); // this -> caller of obj => parent of obj stud == window
        return this.grade; // this.name -> caller of obj stud => parent of obj stud == window.name == undefined
    },
    getInfo1: function() {
        setTimeout( ()=>{console.log(this)}, 2000 );
        // here, setTineout function is calling arrow fn, hence caller is caller of setTimeout => function => stud
    },
    getInfo2: function() {
        setTimeout( function() {console.log(this)}, 2000 );
        // here, setTineout function is calling normal fn, hence caller is setTimeout => window
    }
}


/**
 *  Practice Qs:
 *      - Write an Arrow fn that returns the square of an number
 *      - write a fn that prints "Hello World" 5 times at intervals of 2s each
*/

let square = (n) => n*n;

let func1 = () => {
    for (let i=0; i<5; i++) {
        setTimeout(()=> console.log("Hello World"), 2000);
    };
};
func1(); // directly prints 5 times at the same time with time interval 2 sec

// But the above function won't work as expected, hence we write the below fn

let id2 = setInterval( () => console.log("Hello world"), 2000);
console.log(id2); // runs for 5 times
setTimeout(() => {clearInterval(id2);}, 10000);  // stops after 10 secs
