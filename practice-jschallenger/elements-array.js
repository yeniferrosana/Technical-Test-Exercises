/****
 * Get first n elements of an array
 * 
 * Write a function that takes an array (a) as argument.
 * Extract the first 3 elements of a. Return the resulting array
 */
function myFunction(a) {
  return (a.slice(0,3));
}
console.log(myFunction([1,2,3,4]));