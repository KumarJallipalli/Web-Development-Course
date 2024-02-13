/**
 * ## Loops
        - loops are used to iterate over a piece of code
        - i.e., execute a piece of code multiple times without repetition of the code
        - Loops used to control the flow of program
    
    A program is a set of instructions given to a computer to perform a specific task
*/

/**
 * Syntax of for loops is 
    * for ( initialization; condition; updation ) {
            //piece of code
        }

        Initialization - used to initialize variable(s)
        condition - specifies the condition to go inside lopp or exit the loop
        updation - updates the variable, so that it won't go into infinite loop

        This for-loop will be executed until the condition is true.
        If condition is fasle, then flow will exit the loop.

        All the code within the curly braces { } will be called for-block [ of code ] 
 */

for (let i = 1; i<=5; i++) {
	console.log(i);
}

/**
 * ## What is DRY run..?

    - DRY run is process of executing a code snippet manually on a paper without actually executing it in a computer.
    - It is used to
        - understand the flow of program
        - identify/find the bugs in the program/code
*/

// print all Odd numbers from 1 to 15
//normal code
for (let i=1; i<=15; i++) {
    if (i%2 == 1) {
        console.log(i);
    }  
}

//optimised code
for (let i=1; i<=15; i+=2) {
    console.log(i);
}


// print all Even numbers from 2 to 10
//normal code
for (let i=2; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }  
}

//optimised code
for (let i=2; i<=10; i+=2) {
    console.log(i);
}


// Print the multiplication table of 5
//normal code
for (let i=1; i<=10; i++) {
    console.log(5*i);
}

//not required but for fun
for (let i=1; i<=10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}

//taking input from user & then printing table
let n = prompt("Please input a number to calculate it's multiplication table")
n = parseInt(n); 
for (let i=1; i<=10; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
}

/**
 * NOTE:
 *      Whatever the input given by user in prompt, it is taken & stored as a string only
*/

/**
 * While Loop:
 * 
 *      Syntax:
 *          while (condition) {
 *              code to be iterated
 *              And updation too
 *          }
 * 
 *      - Here, var will be initialized before the loop itself
 *      - condition - whether to enter the loop or exit the loop
 *      - updation is written inside the while block 
 * 
 *      - All the code within the curly braces { } will be called while-block [ of code ] 
*/

//Ex of while-loop
let i = 1;
while (i<=5) {
    console.log(i);
    i++;
}

/**
 * GAME - Fav movie game guess
 *      - Users enter the guess movie name
 *      - If it matches the fav movie, wins else fails
 *      - if he wants to exit the game, he will an opt.
 */

let favMovie = "Forrest Gump";
let guess = prompt("Guess my Favourite Movie..! \nor \nEnter 'quit' to exit the game");

while ( (guess != favMovie) && (guess != "quit")) {
    console.log("Wrong Guess..!")
    guess = prompt("Guess my Favourite Movie..! \nor \nEnter Quit to exit the game");
}

if (guess == favMovie) {
    console.log("Congratulations..! \nYou have guessed the correct movie");
}
else {
    console.log("You have exited the Game");
}


/**
 *      How to loop with arrays
 */

//defining an array
let arr = ['mango', "guava", "apple", "pineApple", "watermelon"];

//here, we used the length method to know No. of iterations
for (let i=0; i<arr.length; i++) {
    //we have used i to iterate over each index
    console.log(i, arr[i]);
}

/**
 *      How to loop with Nested Arrays
 */

//Nested array -> An array within an array is called NEsted array
//defining the Nested array
let nestedArr = [ ['Iron Man', 'Captain America', "Hulk"], ["Batman", "Super Man", "Flash", "Wonder Woman"] ];

//1st for-loop/outer-loop is used to iterate over each array
for (let i=0; i<nestedArr.length; i++) {
    //inner loop is used to iterate over each element inside the array
    //nestedArr[i].length -> gives the length of each array [ but make sure to use i only otherwise error]
    for (let j=0; j<nestedArr[i].length; j++) {
        console.log(i, j, nestedArr[i][j]);
    }
}

/**
 *  for-of Loop:
 *  The JavaScript for of statement loops through the values of an iterable object.
 *      Syntax:
 *              for (variable of iterable) {
 *                  code block
 *              }
 *      - variable - name of the var [ we can (or) cannot declare var, that's NOT a problem ]
 *      - iterable - An object that has iterable properties like string, array...
 * 
 *  This for-of loop will be replacing all the 3 steps of for-loop with a single 'of' keyword
 */

let fruits = ["mango", "melons", "apple", "berries"];

for (i of fruits) {
    console.log(i);
}
/**
 *      - here, i is the variable [in this case, var is not declared]
 *      - fruits is the name of the iterable
 */

for ( let char of "Apna College") {
    console.log(char)
}
/**
 *      - here, char is the var [ in this case, we have declared it ]
 *      - instead of iterable name, we have given the iterable itself "APna College"
 */

// for-of loop in Nested arrays
let heroes = [ ['Iron Man', 'Captain America', "Hulk"], ["Batman", "Super Man", "Flash", "Wonder Woman"] ];

for (i of heroes) {
    console.log(i) //prints the individula array

    //iterates over each array
    for (j of i) {
        //prints the individual element from array
        console.log (j)
    }
}



/**
 *      To-Do App
 * 
 *          - list -> to show all to-do's
 *          - add -> to add a to-do
 *          - delete -> to delete a task
 *          - quit -> to exit the to-do
 */

//We will be using an array to have all the tasks
let todo = [];
let req = null;

while (true) {
    //Taking user input
    req = prompt(`Please select one of the following actions:
    1. list -> to show all to-do's
    2. add -> to add a to-do
    3. delete -> to delete a task
    4. quit -> to exit the to-do `);

    //Exiting the app
    if (req == "quit")
    break;

    if (req == "list") {
        //printing the task
        for (let i=0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }
    }
    else if (req == "add") {
        let task = prompt("please enter the task..!")
        todo.push(task);
        console.log("Task Added");
    }
    else if (req == "delete") {
        //printing the tasks, so that user can select the task to delete
        for (let i=0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }

        //asking the task number from user to delete the task
        let ind = prompt("Please Enter the task number");
        todo.splice(ind-1, 1);
        console.log("Task deleted");
    }
    else {
        console.log("Wrong Request")
    }
}