
//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

var splice_function = function(nums:number[], idx:number, val:number) : number[] {
    nums.splice(idx, 1, val)
    return nums
}

console.log(splice_function([1, 2, 3, 4, 7], 4, 5))

//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

var nums = [1,2,3,4,5];

var add_nums = function(num:number): number[]{
    nums.push(num)
    return nums
}
var remove = function():number[]{
    nums.pop()
    return nums
}
var update = function(idx:number, val:number):number[]{
    nums.splice(idx, 1, val) // splice(index, value, delete)
    return nums
}

console.log(update(3, 14))
console.log(add_nums(4))
console.log(remove())

//  - Write a program that uses a while loop to print the first 25 integers.

var num1:number = 1;
while (num1 <= 25){
    console.log(num1); 
    num1 ++;
}

//  - Write a program that uses a while loop to print the first 10 even numbers.

var num2:number = 1;
while (num2 <= 20){
    if (num2 %2 == 0){
        console.log(num2)
    }
    num2 ++;
}

//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

var factorial = function(num3:number) : number{
    if (num3 < 1){return 1};
    var product:number = 1;
    
    while (num3 > 0){  // 2 > 0
        product *= num3;   //  3 * 2 * 
        num3 --;
    }
    return product
};

console.log(factorial(7));

//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.



//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

var nums:number[] = [1,2,3,4,5]
var sum:number = 0;
var j:number = 0;

while (j < nums.length){
    sum += nums[j]
    j ++
}
console.log(sum)

//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

var temp_c:number[] = [34, 35, 36, 37]
var temp_F:number[] = [];
let i:number = 0;

while (i < temp_c.length){
    var new_temp:number = Math.round(temp_c[i] * (9 / 5) + 32);
    temp_F.push(new_temp);
    i ++;
};

console.log(temp_F);
