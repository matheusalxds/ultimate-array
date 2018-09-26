// SPREAD OPERATOR
// WILL JOIN THE ARRAYS
console.log('- USING SPREAD -');
const array = [ 'Aerys', 'Daenerys', 'Visaerys' ];
console.log('array', array);

const array2 = [ 'Aegon', 'Maegor', ...array, 'Brandon' ];
console.log('array2', array2);
console.log('\n');

// REST OPERATOR
// Only works inside the arguments section of a function declaration

// function hello(a, b, c, d, e) {
//   console.log('values:', a, b, c, d, e);
// }

function hello(a, b, ...c) {
  console.log('values:', a, b, c);
}

hello(1, 2, 3, 4, 5);
