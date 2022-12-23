/**
 * Una pareja de entusiastas de la navidad ha creado una empresa
 * de adornos navideños. El primer adorno que quieren fabricar es
 * un cubo que se pone en los árboles.
 * El problema es que tienen que programar la máquina y no saben
 * cómo hacerlo. Nos han pedido ayuda para lograrlo.
 * Para crear los cubos se le pasa un número con el tamaño
 * deseado al programa y este devuelve un string con el diseño
 * de ese tamaño. Por ejemplo, si le pasamos un 3, el programa
 * debe devolver un cubo de 3x3x3:
 *   /\_\_\_\
    /\/\_\_\_\
   /\/\/\_\_\_\
   \/\/\/_/_/_/
    \/\/_/_/_/
     \/_/_/_/
  Como ves el cubo tiene tres caras visualmente. Los símbolos que
  se usan para construir las caras del cubo son: /, \, _ y (espacio
  en blanco).
  A tener en cuenta:
  * Fíjate bien en los espacios en blanco que hay en el cubo.
  * El cubo tiene que ser simétrico.
  * Asegúrate de usar los símbolos correctos.
  * Cada nueva línea del cubo debe terminar con un salto de línea
    (\n) excepto la última.
 */

function createCube(size) {
  let plUp = "/\\";
  let prUp = "_\\";
  let plDo = "\\/";
  let prDo = "_/";
  let space = ' ';
  let line = '\n';

  let cube = '';

  for (let i = 1; i <= size; i++) {
    cube = cube.concat(space.repeat(size-i));
    cube = cube.concat(plUp.repeat(i));
    cube = cube.concat(prUp.repeat(size));
    cube = cube.concat(line);
  }

  for (let i = size; i >= 1; i--) {
    cube = cube.concat(space.repeat(size-i));
    cube = cube.concat(plDo.repeat(i));
    cube = cube.concat(prDo.repeat(size));
    cube = cube.concat(line);
  }

  cube = cube.slice(0,cube.length-1)

  return cube;
}
    
console.log(createCube(5));