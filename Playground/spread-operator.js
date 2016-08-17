// pass elements of arays in function calls
// using the spread operator which 'spreads'
// the array

// function add(a, b) {
//   return a + b;
// }
// console.log(add(3,1)); // 4

// var toAdd = [9,5];
// console.log(add(...toAdd)); // 14


// concatenate arrays using spread operator

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];

// console.log(final); // [ 3, 'Jen', 'Cory' ]



// CHALLENGE 1
var person1 = ['Andrew', 25];
var person2 = ['Jen', 29];
// Hi Andrew, you are 25

function greet(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

greet(...person1); // Hi Andrew, you are 25
greet(...person2); // Hi Jen, you are 29



// CHALLENGE 2
// var names = ['Mike', 'Ben'];
// var final = ['Pete', ...names];

// final.forEach(el => console.log(`Hi ${el}`)); // print out all numes
