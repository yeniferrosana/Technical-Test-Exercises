/***
 * Check if property exists in object
 * 
 * Write a function that takes an object (a) and a string (b)
 * as argument. Return true if the object has a property with
 * key 'b'. Return false otherwise.
 */

function myFunction(a, b) {
  return b in a;
}

console.log(myFunction({x:'a', y:'b', z:'c'}, 'a'));