// Basics of JavaScript 

/* 
    Hey mom, look at my multiline comment!
    Let's put it on the fridge
    Primative data types in JS: strings, integers, Booleans, floats, arrays, objects(very similar to python dic)
    Functions in JS
    Loops
    Scripting vs Programming language 
*/

// String variables
var first_name = 'Zack';

// Display the value in js
console.log(first_name)

// Assign an integer
var some_number = 32;
console.log(some_number)

// Show all attributes of a document or id
console.dir(document)


// Float variable
var some_float = 3.141592
console.log(some_float)

// Array
var some_array = [1,2,3,4];
console.log(some_array)

var some_object = {'Yee': 'Haw'}
console.log(some_object)

// JS hoisting 
a_num = 10
console.log(a_num)
var a_num = 10
console.log(a_num)

console.log(some_random_variable) // Still runs, but returns undefined = none type (not good practice)
var some_random_variable  = 'This is a random variable'
console.log(some_random_variable)

// Ideal way of declaring a variable is using 'let' or 'const'
let x;
console.log(x)
x = 3
console.log(x)

const y = 5;
console.log(y)
// y = 6; // constant variable is not supposed to change (be set); good for functions 
// console.log(y)

// Basic math operations

// Addition 
let sum = 5 + 5
console.log(sum)

// SUbtraction 
let diff = 5 - 4

let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// Multiplication, division, exponents same as Python

// Other
// Finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)

// Alterinative, math.ceil(n) brings back the ceiling 

// Mind bender
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

// Mind bender 2
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

// Redeclaration of variables 
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

// Using the 'let' keyword for the same
let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Koby' //don't retype let on later variable changes
console.log(nba_goat)

// Regular named functions
function addNums() {
    let num = 4;
    let num_2 = 5;
    
    return num + num_2
}
console.log(addNums())

let addNum2 = function(num, num_2){
    return num + num_2
}
console.log(addNum2(6,7))

// ES6+ Arrow function in JS
// Out first example shows how to use a single parameter in an arrow function w/out parenthesis 
// This can only be done with one parameter if you don't want to use parenthesis 

let cubed = num => {
    return num**3
}
console.log(cubed(4))

// With parenthesis 
let cubed2 = (num) => {
    return num**3
}
console.log(cubed(4))

// If you have multiple parameters YOU MUST have parenthesis 
let toThePower = (num, power) => {
    return num** power
}
console.log(toThePower(4,3))

// No params in an arrow function 
let someFunc = () => {
    return 5
}
console.log(cubed(5))

console.log((function(name){
    let hello = 'Hello ' + name;
    return hello
})('Maggie'))

// Control flow w jS
// if statements
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}
console.log(determineAge(22))

// Ternary Operators 
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age <= 65) ? 'Adult not retired' : 'Elderly person not retired'
}
console.log(determineAge2(31))

// Loops

// For loop
function countByOne(){
    for(let i = 0; i < 20; i ++){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(decreaseByOne())

// While loop 
function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while())

// Do while loop 
function countWithDoWhile(){
    let i = 0;
    let text = '';

    do{
        text += `this number is... ${i} \n`;
        i++
    }

    while(i < 10)
    return text
}
console.log(countWithDoWhile())

// Create an array
let group_of_names = ['Jerry', 'Ben', 'Bash', 'Brock', 'Misty']

// index the first position 
console.log(group_of_names[0])

let Terry, Ben, Misty;
[Terry, Misty, Ben] = group_of_names
console.log(Terry, Ben, Misty)
console.log(group_of_names)
console.log(Ben)

// Method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < group_of_names.lenghth; i++){
        console.log(group_of_names[i])
    }
    return 'Done'
}
console.log(showAllNames())

// Method 2 
console.log(group_of_names.forEach(element => console.log(element)))

// JS array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names))

// More methods: map, filter, reduce
let b_names = group_of_names.map( i => {
    if(i[0] == 'B'){
        return i 
    } else {
        return false 
    }
})
console.log(b_names)

// Long form of .map
let b_names_test = function(){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}
console.log(b_names_test())

// .filter()
let long_names = group_of_names.filter( element => element.length < 4)
console.log(long_names)

// .reduce
const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumlator, current_num) => {
    return accumlator + current_num
})
console.log(nums_reduced)

// Can also use methods: .join, .slice .search .splice