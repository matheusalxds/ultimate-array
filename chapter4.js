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
