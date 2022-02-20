'use strict';

/*
    Homework Part 1 - Ece Kırcalı

    The first Method has two nested loops
    In every loop iteration, it checks the sum
    When condition is met, values in the array is saved to num1 and num2
    Then the function returns index of those values and sorts them
    Time complexity is n^2

    The second method has 1 for-of loop
    In every iteration, it takes the difference between target and element and saves it to a variable named "minus"
    If the index of "minus" exists in the array, it saves the indexes of element and minus to a variable called result 
    Time complexity is n
*/


// First Method
function indexOfSumValues1(arr, target) {
    let num1, num2;
    let result = [-1,-1];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if((arr[i] + arr[j] === target)) {
                num1 = arr[i];
                num2 = arr[j];
                result = [i,j];
            }
        }
    }

    //result = arr.indexOf(num1) === arr.indexOf(num2) ? [arr.indexOf(num1), arr.lastIndexOf(num1)] : [arr.indexOf(num1), arr.indexOf(num2)];

    return result.sort();
}


// Second Method
function indexOfSumValues2(arr, target) {
    let minus = 0;
    let result = [-1, -1];
    
    for(var element of arr) {
        minus = target - element;
        if(arr.indexOf(minus) !== -1) {
            result = arr.indexOf(element) === arr.indexOf(minus) ? [arr.indexOf(element), arr.lastIndexOf(element)] : [arr.indexOf(element), arr.indexOf(minus)];
        }
    }

    return result.sort();
}

let num1 = [2, 7, 11, 15];
let target1 = 9;

let num2 = [3, 2, 4];
let target2 = 6;

let num3 = [3, 3];
let target3 = 6;

let num4 = [1, 2, 3];
let target4 = 9;

console.log("Test First Method");
console.log(indexOfSumValues1(num1, target1));
console.log(indexOfSumValues1(num2, target2));
console.log(indexOfSumValues1(num3, target3));
console.log(indexOfSumValues1(num4, target4));

console.log("Test Second Method");
console.log(indexOfSumValues2(num1, target1));
console.log(indexOfSumValues2(num2, target2));
console.log(indexOfSumValues2(num3, target3));
console.log(indexOfSumValues2(num4, target4));