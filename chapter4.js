// Using loops
let numbers = [ 1, 2, 3, 4, 5 ];
let numbers2 = [ 1, 2, 3, 4, 5, 6, 7 ];
let digits = [ 1, 15, 4, 65, 200, 7, 19, 5 ];
let cars = [ 'Mustang', 'Camero', 'Tesla', 'Volvo', 'Audi' ];

// forEach
// removing 1 item by index
numbers.forEach((e, i) => {
  if (i == 2) {
    numbers.splice(i, 1);
  }
});
console.log(numbers);
console.log('\n');

// The most safe way to remove elements from array is to use FILTER
// greater than 10
console.log(digits.filter(d => d > 10));
console.log('\n');

// par
console.log(digits.filter(d => d % 2 === 0));

// Filter names by first letter equal 'J'
function filterNames(array) {
  return array.filter(item => item[ 0 ] === 'J');
}

console.log(filterNames([ 'Jon', 'Matheus', 'Jups' ]));
console.log('\n');

// USING MAP
// length of each car string
console.log(cars.map(car => car.length));
// first letter of each car
console.log(cars.map(car => car[ 0 ]));

// NEW APPROACH
// passing func like param for MAP
const map = n => n * n;
console.log(numbers.map(map));

// USING REDUCE
// PREV is always the total of previous number
// NEXT is always the new number
numbers2.reduce((prev, next) => {
  console.log('->', prev, next);
  // return prev + next;
  prev[ next ] = next;
  return prev;
}, {});
// }, 0);
console.log('\n');

// USING EVERY, SOME AND FIND
// SOME returns true if the predicate is true for one or more element
// EVERY returns true if the predicate is true for EVERY element
// FIND will just return the first element that passes the predicate
console.log('ARRAY: ', digits);
console.log('SOME - greater than 20: ', digits.some(n => n > 20));
console.log('EVERY - greater than 20: ', digits.every(n => n > 20));
console.log('EVERY - greater than 0: ', digits.every(n => n > 0));
console.log('FIND - greater than 20: ', digits.find(n => n > 20));
console.log('\n');

// INCLUDES similar to .SOME(), return true if any element of the array matches the value
// that is passed
console.log('INCLUDES - check exists the value 0: ', digits.includes(0));
console.log('INCLUDES - check exists the value 200: ', digits.includes(200));
console.log('\n');

// Chaining array methods
console.log('- Chaining methods - ');
console.log('using map, filter, reduce');
// const chainingMethods = numbers
//   .map(n => n * n)
//   .filter(n => n % 2 === 0)
//   .reduce((prev, next) => {
//     return prev + next
//   });
// console.log(chainingMethods);
// breaking chains in arrow function
const multi = n => n * n;
const isPar = n => n % 2 === 0;
const sum = (prev, next) => prev + next;
console.log(numbers
  .map(multi)
  .filter(isPar)
  .reduce(sum)
);

// Provide a function that takes an array of numbers, and returns the sum of the arrays (as a number, not an array).
// function sum(array) {
//   const sumReduce = (prev, next) => prev + next;
//   return array.reduce(sumReduce, 0);
// }
