// Template Literals - To avoid the confusion of using either double quotes or single quotes - use template literals
//  `` (backticks) to store strings kinda stuff

var name1:string = `Aqsa`;


// OPERATORS

var num1:number = 1;
var num2:number = 2;
var num1:number = 4;

// Arithmetic Operators -> +, -, *, /, %, ++, --, **
// Logical Operators -> &&, ||, !
// Assignment Operators -> =, -=, +=, *=, /=, %=, **=
// Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=
// Bitwise Operators -> &, |, ~, ^, <<, >>, >>>
// String Operators -> +, +=
// Type Operators -> typeof, instanceof
// Ternary/Conditional Operator -> condition ? val1 : val2


// CONDITIONAL STATEMENTS
// if
if (num1 == num2) {
    console.log("Equal");
}

// if-else
if (num1 == num2) {
    console.log("Equal");
}   
else {
    console.log("Not Equal");
}

// if-elseif-else

if (num1 == num2) {
    console.log("Equal");
}
else if (num1 > num2) { 
    console.log("Greater");
}
else {
    console.log("Smaller");
}

// FUNCTIONS - Means of code reusability 

// Function Declaration
function add(a:number, b:number) :number{
    let y:number= 3;
    const z:number = 5;
    return a+b;
}

// Function Calling
add(3, 4)

// Arrow Function -> a small one-line function for smaller tasks
let arrow_sum = (a:number, b:number): number => a + b;


// VAR, LET, CONST -> Scope of variables

// var - function scope
// check line-9 and line-11 - reassignment of var is possible

// let - block scope , can be reassigned outside the block
let y:number = 3;
function subtract(a:number, b:number) :number{
    let y:number= 6;
    return a+b;
}

// const - block scope, cannot be reassigned anywhere
const z:number = 4;
function divide(a:number, b:number) :number{
    const z:number= 6;
    return a+b;
}


// NESTED CONDITIONAL STATEMENTS - multiple statements declared inside scope of each other
if (num1 == num2) {
    if (num1 == 0) {
        console.log("Equal and Zero");
    }
}

// ARRAYS
let arr = [1, 2, 3, 4, "Aqsa", true]; // can store multiple types of data in one array

// Adding, Removing and Extracting Elements

arr.push(5);  // add an element
arr.pop();  // removes the last element in array
arr.shift(); // removes the first element in array
arr.unshift (0); // adds an element to the start of array

// Slicing and Splicing
arr.slice(1, 3); // extracts elements from index 1 to 3
arr.splice(1, 3, "hehe", "hehe2"); // adds new elements at indices 1 to 3


// LOOPS - execute same piece of code multiple times

// for loop
for (let i = 0; i < 10; i ++){
    console.log(i);
}


// NESTED FOR LOOPS - takes one value from outer loop - iterates through all values of inner loop - repeat
for (let i = 0; i < 10; i ++){
    for (let j = 0; j < 10; j ++){
        console.log(i, j);
    }
}
