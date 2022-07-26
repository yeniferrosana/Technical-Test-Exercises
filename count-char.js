// Contar cuantas veces se repite un cáracter

let text = "hey JudEe "
let char = 'e'

/***
 * Solución 1:
  console.log(text.search(char))

*/

/**
 * Solución 2:
 */

let array = text.toString()
let count = 0;

for (let i = 0; i < array.length; i++)
  if (array[i] == char)
    count++;

console.log(count)
