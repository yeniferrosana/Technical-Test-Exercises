/***
 * Get union of two sets
 * Write a function that takes two Sets as arguments. 
 * Create the union of the two sets. Return the result.
 */

function myFunction(a, b) {
  return new Set([...a, ...b]);
}

console.log(myFunction(new Set('123'), new Set('234')));