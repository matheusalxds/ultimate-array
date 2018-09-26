/*
USING SORT
When you use sort, you should ALWAYS pass a predicate
without an arguments as this produces the wrong result

Techniques
Greatest to least: (a,b) => a > b ? -1 : 1
Least to greatest: (a,b) => a < b ? -1 : 1
Shortest to longest strings: (a,b) => a.length < b.length ? -1 : 1;
Longest to shortest strings: (a,b) => a.length > b.length ? -1 : 1;
Even numbers at beginning: a => a % 2 === 0 ? -1 : 1
* */
const array = [ 1, 5, 15, 7, 25, 6, 19, 7 ];
console.log('without predicate, wrong response', array.sort());
console.log('with predicate', array.sort((a, b) => {
  return a < b ? -1 : 1
}));

// EXERCISE about SORTING
function sortAscending(array) {
  return array.sort((a,b) => a < b ? -1 : 1)
}
