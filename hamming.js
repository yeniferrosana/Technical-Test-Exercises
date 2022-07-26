/**
 * Distancia de Hamming
 * 
 * El algoritmo de la distancia de Hamming calcula
 * una puntuación de coincidencia para dos cadenas
 * de datos calculando el número de posiciones en 
 * las que los caracteres difieren de una cadena 
 * de datos a otra.
 */

let text1 = 'patitosw';
let text2 = "paratosa";
let distance = 0;

if(text1.length != text2.length)
  throw new UserException('Longitudes Distintas');


else
  for(let i = 0; i < text1.length; i++)
    if (text1[i] != text2[i])
      distance++;

console.log(distance);