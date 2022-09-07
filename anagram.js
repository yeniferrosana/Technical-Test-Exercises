/**
 * Detección de anagramas para cadenas de caracteres: Una cadena
 * es un anagrama de otra si la segunda es simplemente un
 * reordenamiento de la primera. Por ejemplo, 'fresa' y 'frase'
 * son anagramas. Las cadenas 'caro' y 'roca' son también anagramas. 
 */

let text1 = "fresa";
let text2 = "fresa";

function clear (text) {
  // Función para limpiar palabra
  let first_space = /^ /;
  let end_space = / $/;
  let more_space = /[ ]+/g;

  text = text.replace (more_space," ");
  text = text.replace (first_space,"");
  text = text.replace (end_space,"");

  return text;
}

function size_string (text1, text2) {
  if (text1.length === text2.length)
    return true;
  else
    return false;
}

function anagram (text1, text2) {
  text1 = clear(text1);
  text2 = clear(text2);

  if (size_string(text1, text2)) {
    if(text1.toLowerCase() === text2.toLowerCase()) return false;

    return text1.toLowerCase().split("").sort().join("") === text2.toLowerCase().split("").sort().join("");
  }
  else {
    return false;
  }
}

console.log(anagram(text1, text2));