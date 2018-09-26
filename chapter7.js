var _ = require('lodash');

/**
 * USING LODASH & UNDERSCORE
 * Chunk – break an array into smaller arrays
 * Intersection – make a new array out of common elements of two arrays
 * Uniq – create a version of the array with no duplicates
 * Union – unique plus interection
 * Tail – gets all the elements of an array (except the first)
 */

const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const chunk = _.chunk(array, 4);
console.log('chunk', chunk);

const intersection = _.intersection(array, [3,4]);
console.log('intersection', intersection);

const uniq = _.uniq([1,1,1,3,3,4,5,6,6,6]);
console.log('intersection', uniq);
