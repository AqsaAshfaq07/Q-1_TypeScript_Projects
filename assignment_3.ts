//  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

var temp:number = 37;
var temp_f:number;
var temp_C:number;

temp_f = (temp * 9/5) + 32;
temp_C = (temp - 32) * 5/9;

console.log("Temperature in Fahrenheit is: " + temp_f);
console.log("Temperature in Celsius is: " + temp_C);


//  - Write a program that calculates the percentage.

var obtained_marks:number = 80;
var total_marks:number = 100;

var percentage:number;
percentage = (obtained_marks / total_marks) * 100;

console.log("Percentage is: " + percentage);

//  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var given_days:number = 17;
var weeks:number = Math.floor(given_days / 7);
var days:number = given_days - (7 * weeks);

console.log(`You've got ${weeks} weeks and ${days} days.`)

//  - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.


var price:number = 100;
var discount:number;1

if (price >= 100){discount= (price / 100) * 10;}
else{discount = (price / 100) * 5;} 

console.log(`Your final price is ${price - discount}`)

//  - Create a program that x`determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

var age:number = 13;

if (age <= 12 && age >= 0){console.log(`Child`)}
else if (age <= 19 && age >= 13){console.log(`Teenager`)}
else {console.log(`Adult`)};

//  - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

var temp:number = 27;

if (temp <= 16){console.log(`It's too cold.. Wear Warm Clothes!`)}
else if (temp >= 37){console.log(`It's too hot.. Wear Light Clothes!`) }
else {console.log(`It's quite normal.. Have Fun!`)}

//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

var num:number = 20;

if ((num % 3 == 0) && (num % 5 == 0)){console.log(`Number is divisible by both 3 and 5.`)}
else if ((num % 3 == 0) || (num % 5 == 0)){console.log(`Number is divisible by either 3 or 5.`)}
else {console.log(`Number is divisible by neither 3 nor 5.`)};

//  - Write a program that checks if the given year is leap year or not.

var year:number = 2023;

if (year % 4 == 0){console.log(`${year} is a Leap year`)}
else {console.log(`${year} is not a Leap year`)};

//  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

var day_num:number = 7;

switch(day_num){
    case 1:
        console.log('Day is Monday!');
        break;
    case 2:
        console.log('Day is Tuesday!');
        break;
    case 3:
        console.log('Day is Wednesday!');
        break;
    case 4:
        console.log('Day is Thursday!');
        break;
    case 5:
        console.log('Day is Friday!');
        break;
    case 6:
        console.log('Day is Saturday!');
        break;
    case 7:
        console.log('Day is Sunday!');
        break;
    default:
        console.log(`day_num isn't valid!`)
}

//  - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax

var units:number = 200;
var tax:number;

if (units >= 500){tax = (units / 100) * 25;}
else if (units >= 200){tax = (units / 100) * 15;}
else if (units >= 100){tax = (units / 100) * 10;}
else {tax = 0;};

console.log(`Your total electricity bill is: \nUnits consumed: ${units} \nElectricity Bill: ${units + tax}`);

// Where the tax amount will be calculated by the amount of bill.

// Ans -> Tax amount will be calucalted inside the conditional statements.
