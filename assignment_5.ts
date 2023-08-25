// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var n:number = 10;
var even_sum:number = 0;

for (let i:number = 1; i <= n*2; i ++){
    if (i %2 == 0){
        even_sum += i
    }
}
console.log(even_sum)

// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

const nums:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let num of nums){
    if (num %2 == 0){
        console.log(num)
    }
}

// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
        nums.splice(i ,1)
    };
};
console.log(nums);

// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

let radius:number = 6;
    
let calculate_area = function(radius:number){
    return Math.round(3.14 * radius * radius)
};
console.log(calculate_area(radius));

// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let grades:number[] = [90, 85, 75, 65, 40, 55, 33, 100, 95, 80, 70, 60];

for (let i=0; i < grades.length; i++){
    if (grades[i] < 50){
        grades.splice(i, 1)
    }
}
console.log(grades)

// - Write a program that uses a function to find the largest element in an array of numbers.

const numbers:number[] = [1, 2, 3, 4, 5, 6, 77, 8, 9, 10, 11, 78, 12, 13, 14, 15, 16, 117, 18, 19, 20];
var largest_element:number = 0;

for (let i=0; i < numbers.length; i ++){
    if (numbers[i] > largest_element){
        largest_element = numbers[i]        
    }
}
console.log(largest_element)
