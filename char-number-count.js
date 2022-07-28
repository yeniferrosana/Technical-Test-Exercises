// Contar números en string

let text = "anjq??daºmasffddffd dff 11 435 a5A ";

let pattern = /[0-9]/g;
let regex = new RegExp(pattern);

let n = text.match(regex); //buscamos la expresión regular en el texto

if (n == null)
  console.log('No hay ningún número');
else
  console.log(n.length);  
