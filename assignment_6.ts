// Write a program that uses filter to remove all negative numbers from an array of numbers

var nums:number[] = [0, 1, -1, 2, -2, -4, 3, -3, 4, -4];
nums = nums.filter((num) => num >= 0 );
console.log(nums);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let numbers:number[] = [1, 2, 3, 4, 5];
let new_numbers:number[] = numbers.map((num) => num*2)
console.log(new_numbers);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

let fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];
let new_fruits:string[] = fruits.filter((fruit) => (fruit.length > 5));
console.log(new_fruits) ;

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

let nums_array:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_nums:number[] = nums_array.filter((num) => (num %2 == 0)).map((evenNum) => (evenNum * evenNum));
console.log(new_nums);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

let c_temperatures:number[] = [0, 10, 20, 30, 40];
let f_temperatures:number[] = c_temperatures.map((temp) => ((temp * 9/5) + 32));
console.log(f_temperatures);

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let nums_array2:number[] = [3, 6, 9, 12, 15, 18];
let new_nums2:number[] = nums_array2.filter((num) => (num %2 !== 0)).map((odd_num) => (odd_num * 2));
console.log(new_nums2);

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let names:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((num) => {console.log(`${num}!`)});
