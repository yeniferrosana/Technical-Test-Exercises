/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

let text = "Un texto que  tiene palabras. Un texto  ";

let first_space = /^ /;
let end_space = / $/;
let more_space = /[ ]+/g;
let special_char = /[^a-zA-Z ]/g;

//Limpieza de Palabra
text = text.replace (more_space," ");
text = text.replace (first_space,"");
text = text.replace (end_space,"");
text = text.replace (special_char,"");

let text2 = text.split(" ");

let words[];

for (let i = 0; i < text2.length; i++) {
  if (words.find( elemento => elemento.word === text2[i] );)
}



