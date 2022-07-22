// Invertir Cadena

let text = "yenifer";
let result = "";

/*
Opción 1
for (let i=text.length-1; i >= 0 ; i--)
  result = result.concat(text[i]);
*/

result = text.split("");
result = result.reverse();
result = result.join("");

console.log(result);