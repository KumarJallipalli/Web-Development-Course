
/**
 *  Callback:
 *      - A callback is fn which is passed as an argument to another fn
 *      - A higher Order fn is a fn which takes another fn as an argument
 * 
 *  When you pass a function as an argument, remember not to use parenthesis.
*/

/**
 *  forEach():
 *      - It is a HIgher Order fn
 *      - It will execute the callback fn on each element of the array
 *      - syntax => arr.forEach( some fn or name);
*/
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(el => {
    console.log(el);
});


/**
 *  map():
 *      - It is very similar to forEach()
 *      - It will create a new array by execute the callback on each element of array
 *      - It doesn't change the original array
 *      - syntax => arr.map( some fn or name);      [this callback fn will return a value]
*/
let square = arr1.map(el => { return el*el; });

/**
 *  filter():
 *      - It is very similar to map()
 *      - it will filter the elements which only satisfies the callback fn
 *      - syntax => arr.filter( some fn or name);      [this callback fn will return a boolean value ]
*/
let even = arr1.filter(el => {return el%2 == 0;});


/**
    every( )
        - `every()` is a boolean fn & callback fn is also a boolean fn
        - This returns true only if all the elements are true for callback fn, else returns false
        - This is similar to logical AND

    some( )
        - this is very similar to `every()`
        - it works as a logical OR operator
        - This will return true if atleast 1 elements is true for callback, else returns false
*/
[1, 2, 3, 4].every(el => {return el%2 == 0;});  // returns false
[2, 4, 6].every(el => {return el%2 == 0;});  // returns true

[1, 2, 3, 4].some(el => {return el%2 == 0;});  // returns true
[1, 3, 5].every(el => {return el%2 == 0;});  // returns false


/**
 *  reduce( )
        - It reduces the array into a single value
        - syntax → `arr.reduce( reducer fn with 2 para ( accumulator, element ) );`

        - here, accumulator will store the result of previous iteration
        - And returns the value of the last iteration
*/
let arr2 = [1, 2, 3, 4, 5];

let sumOfElements = arr2.reduce( (sum, el) => {
    return sum+el;
});
console.log(sumOfElements);     // returns 15
/**
 *  DRY RUN:
 *      1. sum = 0,     el = 1      sum+el = 1       will be stored in sum => sum = 1
 *      2. sum = 1,     el = 2      sum+el = 3       will be stored in sum => sum = 3
 *      3. sum = 3,     el = 3      sum+el = 6       will be stored in sum => sum = 6
 *      4. sum = 6,     el = 4      sum+el = 10      will be stored in sum => sum = 10
 *      5. sum = 10,    el = 5      sum+el = 15      will be stored in sum => sum = 15
*/


// Finding the maximun ele in an array using reduce( )
let arr3 = [1, 5, 8, 27, 6, 10, 13];

let max = arr3.reduce( (max, el) => {
    if(max < el)
        return el;
    else 
        return max;     // this is V.IMP step
} );
console.log(max);
/**
 *  - If you miss the V.IMP step mentioned in the code
 *  - WKT, reduce fn will always store the result of previous iteration in the accumulator [max]
 *  - if we miss that V>IMP step, then in the scenario where max > el -> it will return unefined & store in max
 *  - Hence, we will be getting undefined as O/P
*/



/**
 *  Practice Qs:
 *      1. Check if all number in our array are multiples of 10 or not
 *      2. create a function to find min number in an array
*/
let arr4 = [20, 40, 50, 80, 60, 10, 70];
console.log (arr4.every( (el) => (el%10 == 0) ));

console.log(arr4.reduce( (min, el) => {
    if(min > el)
        return el;
    else 
        return min;
} ))


/**
 *  Default parameters:
 *      - These are used to assign default values to the parameters during function definition itself
 *      - These default parameter values will only taken when there are no arguments passed dueing fn calling
 *      - in this way, we can get desired outcome even if we miss the arguments.
*/
function sum (a , b = 5) {
    return a+b;
}
comsole.log(sum(2, 7));     // O/P = 9
comsole.log(sum(2));     // O/P = 7

//But, this is wrong & throws exception
function sum (a = 1, b) {
    return a+b;
}
sum(,2);    // saying token " , " not expected
// this is the reason, always prefer to assign values to default parameters which are at last


/**
 *  Spread:
 *      - It will split/spread an iterable into multiple individual values
 *      - syntax -> "...iterable_name"
*/

// WKT, Math.min() will take any number of values as arguments & returns the min of those
Math.min(5, 2, 1, 4, 9, -10, 78, 5, 54);    // O/P = -10

// If we want to find out the min of array elements, then
Math.min(arr[0], arr[1], arr[2], arr[3]);   

// what if we have 100's of elements in an array, then we need to use loop right. But spread is used instead
Math.min(...arr); 

// similarly, spread is used in multiple ways like
console.log(...arr)  // to print individual elements, instead of forEach or for loop

// this can also be used in strings or objects & any other iterables
console.log(..."Apna College");

// To crate/copy a new array from existing
let newArr = [...arr, ...arr1];   // adds 2 existing arrays into one new array

// To create/copy a new string
let newString = [..."ApnaCollege"];

/**
 *  Spread in Object Literals
*/
let obj1 = {
    email: "apnacollege@gmail.com",
    course: "Delta Batch"
}

// spread this obj literal to make a copy
let objCopy = {...obj1, fee: 7000};

// spread an array to object
let obj2 = {...arr};        
/**
 *  - here arr indices will be stored as keys & values as values 
 *  - similarly with strings also
*/



/**
 *  Rest:
 *      - It is pure opposite of `spread`
        - It allows a function to take an indefinite number of arguments & bundle them into an array
        - syntax → `...args` [same as spread]

        - Math.min() (or) Math.max() uses "arguments" internally to take indefinite values & perform
        - this "arguments" will be avaiable for all the functions & bundles them into a collection
        - As "arguments" is a collection, hence we cannot perform all the array methods
        - Hence, this "rest" is introduced
*/

function min (...args) {
    console.log(args.length);
    return args.reduce( (min, el) => {
        if (min > el)
            return el;
        else 
            return min;
    } );
}

console.log(min(8, 5, 10, 2, 7, 6)); 
/**
 *  - Here, all the arguments are bundled to form an array
 *  - now "args" -> is the name of the array
 *  - We can perform all the methods of an array on this args
*/



/**
 *  Destructuring:
 *      - Storing values of an array/object into multiple variables
 *      - here we use square braces [ ] for arrays
        - we use curly braces { } for objects
*/
let arr5 = ["Ajay", "Bijay", "Vijay", "Nijay", "Kijay", "Tijay", "Dijay"];

// let winner = arr5[0];
// let runner = arr5[1];
// let seconRunner = arr5[2];

// But instead of writing above code we can use
let [winner, runner, seconRunner, ...otherArr] = arr5;

/**
 *  - 1st 3 variables will have the values of 1st 3 elements
 *  - the last variable "otherArr" -> is an array formed using rest.
 *  - otherArr -> will have all the remaining elements as a new array
*/


/**
 * But for Objects, ther are multiple ways of destructuring an object
 *      1. Using the key names
 *      2. renaming the key names to our desired names
 *      3. giving the default values [if in case those keys are not available in obj] 
*/
let obj3 = {
    name: "karan",
    class: 10,
    age: 16,
    subjects: ["hindi", "Telugu", "English", "Maths", "Social", "Science"],
    username: "karan@gmail.com",
    password: "karan@123"
};

// 1. Using the key names -> searches for the key in the obj & returns the mapped value
let {username, password} = obj3;        // now, username & password are new variables with values

// 2. renaming the key names to our desired names -> we can use our desired names instead of keys
let {username: user, password: pwd} = obj3;  // now, user & pwd are created with values

// giving the default values -> if there is no key present in obj, then we can create a new var by assigning the value
let {city = "pune", age: vayasu = 14} = obj3;   // V.IMP
/**
 *  - here, city = pune [ since there is no key as city in obj]
 *  - vayasu = 16, since there already exists a key with age [but we renamed it to vayasu] it will take obj value
*/