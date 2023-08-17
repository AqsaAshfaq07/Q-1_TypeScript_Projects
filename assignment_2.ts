// Exercise - 1 
// Write a program that calculates the area of a rectangle.

var width:number = 5;
var height:number = 6;
var area:number = width * height;
console.log("Area of Rectangle is: " + area)

// Exercise - 2
// Write a program that takes input and calculates the volume of a cube.

var side:number = 5;
var volume:number = side * side * side;
console.log("Volume of Cube is: " + volume)

// Exercise - 3  
// Write a program that checks if a given number is positive, negative, or zero.

var num1:number = 0;

if (num1 > 0){console.log("Number is positive");}
else if (num1 < 0){console.log("Number is negative");}
else{console.log("Number is zero");}

// Exercise - 4 
// Write a program that checks if a given number is even or odd.

var num2:number = 9;
if  (num2 % 2 == 0){console.log("Number is even");}
else{console.log("Number is odd");}

// Exercise - 5
// Write a program that determines if a person is eligible to vote based on their age.

var age:number = 18;
if (age >= 18){console.log("Person is eligible to vote");}
else{console.log("Person is not eligible to vote");}

// Exercise - 6
// Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)

var result:number = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log("Result of the expression is: " + result)
