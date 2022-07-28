/**
 * Escribe, en el lenguaje de programación que desees, un programa
 * que muestre en pantalla los números del 1 al 100, sustituyendo
 * los múltiplos de 3 por el palabro “Fizz” y, a su vez, los
 * múltiplos de 5 por “Buzz”. Para los guarismos que, al tiempo,
 * son múltiplos de 3 y 5, utiliza el combinado “FizzBuzz”.
 */
let fizz_buzz=[];

for (let i = 1; i <= 100; i++){
  if ((i % 3 === 0) || (i % 5 === 0)) {
    if ((i % 3 === 0) && (i % 5 != 0))
      fizz_buzz.push('Fizz');
    else if ((i % 5 === 0) && (i % 3 != 0))
      fizz_buzz.push('Buzz');
    else
      fizz_buzz.push('Fizz Buzz');
  }
  else {
    fizz_buzz.push(i);
  }
}

console.log(fizz_buzz);