/*
Enunciado: dado un número, mostrar su serie de fibonacci.
La serie de fibonacci es un orden de números donde cada 
número es la suma de los dos anteriores.

Ejemplos:
fib(10)[0]
fib(10)[1]

[0]=Serie completa: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
[1]=Resultado de la serie de fibonacci: 55
*/

function fibonacci (n){
  let serie = [0, 1]
  
  for (let i = 2; i <= n; i++)
    serie.push(serie[i-1]+serie[i-2]);
    
  return [serie, serie[n]];
}

console.log(fibonacci(10)[0]);
console.log(fibonacci(10)[1]);