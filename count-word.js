/**
 *  Contador de palabras
*/ 

let text = "Un texto que  tiene palabras ";

let first_space = /^ /;
let end_space = / $/;
let more_space = /[ ]+/g;
let count = 0;

//Limpieza de Palabra
text = text.replace (more_space," ");
text = text.replace (first_space,"");
text = text.replace (end_space,"");

// Solución 1:
/**
 * for (let i = 0; i < text.length; i++)
  if(text[i] == ' ')
    count++;

if (text[(text.length)-1] != ' ')
  count++;
*/

// Solución 2
text2 = text.split(" ");
count = text2.length;

console.log(count);

