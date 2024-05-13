// Q1.) Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user = {}; 
// user.name = "John"; 
// user.surname = "Smith"; 
// user.name = "Pete"; 
// delete user.name; 

// console.log(user);


// Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
//   let schedule = {};
//   console.log(isEmpty(schedule)); 
//   schedule["8:30"] = "get up";
//   console.log(isEmpty(schedule)); 

// Q3.) We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
//   console.log(sum);


//   Q4.) Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// const prompt = require('prompt-sync')();

// const calculator = {
//     read() {
//       this.a = prompt('Enter the first value: ');
//       this.b = prompt('Enter the second value: ');
//     },
//     sum() {
//       return +this.a + +this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     }
//   };
  
//   calculator.read();
//   console.log(calculator.sum());
//   console.log(calculator.mul());


function SubarraysWithGivenSum(arr, target) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - target)) {
            count += map.get(sum - target);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

const arr = [10, 2, -2, -20, 10];
const target = -10;

const Count = SubarraysWithGivenSum(arr, target);
console.log(Count);

  

  

