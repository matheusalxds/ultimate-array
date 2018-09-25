let array = [ 1, 2, 3, 4 ];
let names = [ 'Jon', 'Eddard', 'Sansa' ];
let names2 = [ 'Arya', 'Jon' ];
let names3 = [ 'Tyrion', 'Tywin', 'Jaime' ];
let names4 = [ 'Tyrion', 'Tywin', 'Jaime' ];

console.log(array);
console.log('\n');

console.log(names);
console.log('\n');

console.log(names[ 0 ]);
console.log('\n');

console.log(names[ 2 ]);
console.log('\n');

let num = 1;
console.log(names[ num ]);
console.log('\n');

names.push('Robb');
console.log(names);
console.log('\n');

//             splice ((start index), (how many values will be removed), data)
// 1rd example:       ( 2,             0,                               'Rickon');
// 2rd example:       ( 2,             1,                               'Rickon');
// The second example, the array will remove 2 indexes after index 2
const index = 2, remove = 2;
const removedSplice = names.splice(index, remove, 'Rickon');
console.log(`Removed, staring at ${index} index and removed ${remove} counts, removed values: `, removedSplice);
console.log('Original array: ', names);
console.log('\n');

// To combine 2 different arrays :
console.log('To combine to arrays, you should use CONCAT: ', names.concat(names2));
console.log('\n');

console.log('Original array: ', array);
console.log('To add the number 5 to the end of the array: ', array.concat(5));
console.log('\n');

// To modify a specific element of the array'
console.log('Original array', names);
names[ 1 ] = 'Matheus';
console.log('Modified array', names);
console.log('\n');

// Using strings like index, can lead to puzzling behavior! That's because the string index is hidden
names3['a'] = 'Cersei';
console.log('hidden index', names3['a']);
console.log('original array', names3);
console.log('\n');

// Removing elements from Array, we need to use splice
const removedFromArray = names.splice(0, 1);
console.log('removed from array', removedFromArray);
console.log('array', names);
console.log('\n');

// Removing the last element from Array, we need to use pop
console.log('array', names4);
console.log('removed last element: ', names4.pop());
console.log('array', names4);
console.log('\n');


