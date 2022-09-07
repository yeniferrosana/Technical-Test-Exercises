/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function prime(numero) {
  if (numero == 0 || numero == 1 || numero == 4) return false;

  for ( let i = 2; i < numero/2; i++) {
    if (numero % i == 0) return false;
  }

  return true;
}

for ( let i =1; i < 101; i++ ) {
  if(prime(i))
    console.log(i);
}