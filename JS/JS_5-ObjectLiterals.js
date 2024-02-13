

let student = {
    name: "Aman",
    age: 18,
    marks: 95
};
/**
 * student - Object literal
 * name, age, marks - keys
 * "aman", 18. 95 - values
 * age: 18 -> key-value pair [property] 
 * 
 * Make sure that multiple key-value pairs are separated using ( , ) 
 */


// make a twiiter post using an Object Literal
let post = {
    user: "@sivajallipalli",
    content: "This is my #FirstPost",
    likes: 150,
    reposts: 10,
    tags: ["#FirstPost", "DeltaBatch", "ApnaCollege"]
};

// now prop is a variable
let prop = "reposts";

/**
 * WKT, "reposts" is a key of Obj literal
 * And "reposts" is also a value of var prop
 *      - if we use 
 *          - post["reposts"] -> 10
 *          - post.reposts -> 10
 *          - post[prop] -> 10      [ here, there are no " " used ]
 *          - post.prop -> undefined
 */


let obj = {
    1: 'a',
    2: 'b',
    null: 'c',
    true: 'd',
    unefined: 'e'
};


const stud = {
    name: "sai",
    marks: 98,
    age: 19,
    city: "Hyderabad"
}


//Nested Objects
const classInfo = {
    Aman: {
        grade: 'A+',
        city: "pune"
    },
    Amit: {
        grade: 'A',
        city: "Bangalore"
    },
    Akash: {
        grade: 'O',
        city: "Mumbai"
    }
}
/**
 * classInfo -> Nested Object
 *      - We can add, update & delete the propeties & sub-properties [nested obj prop]
 */

classInfo.Aman //prints the Aman Obj
classInfo.Aman.city // "pune" -> in this way we can access the nested obj's values
classInfo.Amit.city = "Jaipur" // updates the value of sub-obj
delete classInfo.Akash.city // deletes the city property


// Array of Objects
const arr = [ {name: "Aman", city: "Pune"}, {name: "Buntu", city: "kolkata", grade: 'A'}, {name: "Indu", city: "indus"} ]

arr[0] // gets the 1st obj
arr[1].city = "calcutta" // updates the value of obj at ind 1
arr[2] = "Updated the Obj with string"  


/**
 *      How to get a random number between 1 to 10
 */

// Step-1: Generate a random number using random method
let num = Math.random();

// Step-2: Since, random method only gives the decimal numbers, multiply it with 10 to make integer decimals
// If we want generate a random num between 1 to 100, then multiply with 100 in this step
num = num * 10

// Step-3: remove the decimal part
num = Math.floor(num);

// Step-4: due to random method, we will never get 1 => never 10. Hence add 1
num = num + 1;

// All the abpve steps in 1 step
let radom  = Math.floor( Math.random() * 10 ) + 1;


/**
 *  Practice Qs:
 *  1.) Generate a random number between 1 to 100
 *  2.) Generate a random number between 1 to 5
 *  3.) Generate a random number between 21 to 25
*/

let random_100 = Math.floor( Math.random() * 100 ) + 1;
let random_5 = Math.floor( Math.random()*5 ) + 1;
let random_25 = Math.floor( Math.random()*5 ) + 21; // if we give 20, only (20 - 24) will be generated


/**
 *  GUessing Game:
 *  - User enters a max number, then system will generate a random number between 1 to max number
 *  - Now user tries to guess this random number
 */
let max = prompt("Enter a Maximum Number..!");
const randomNumber = Math.floor( Math.random()*max ) + 1;

let guess = prompt("Guess the number..");

while (true) {
    if (guess == "quit") {
        console.log("You have quit the Game..!");
        break;
    }

    if (guess == randomNumber) {
        console.log("Congratulations, You have guessed the Number & Number was ", randomNumber);
        break;
    }
    else if (guess < randomNumber) {
        guess = prompt("Guessed number is Smaller, guess again.");
    }
    else {
        guess = prompt("Guessed number is Larger, guess again.");
    }
}