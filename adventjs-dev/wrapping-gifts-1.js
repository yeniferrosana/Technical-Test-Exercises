/**
 * Este año los elfos han comprado una máquina que envuelve
 * regalos. Pero… ¡no viene programada! Necesitamos crear un
 * algoritmo que le ayude en la tarea.
 * A la máquina se le pasa un array con los regalos. Cada regalo es
 * un string. Necesitamos que la máquina envuelva cada regalo en
 * papel de regalo y lo coloque en un array de regalos envueltos.
 * El papel de regalo es el símbolo * y para envolver un regalo se
 * coloca el símbolo * de forma que rodee totalmente al string por
 * todos los lados.
 * El papel de regalo envuelve el string. Por arriba y por
 * abajo, para no dejar ningún hueco, las esquinas también están
 * cubiertas por el papel de regalo.
 * Nota: El carácter \n representa un salto de línea.
 * ¡Ojo! Asegúrate que pones el número correcto de * para
 * envolver completamente el string. Pero no demasiados. Sólo los
 * necesarios para cubrir el string.
 */

function wrapping(gifts) {
  let r = '*\n';
  let l = '\n*';
  let c = '*';
  let wrapped=[];

  gifts.forEach((gift) => {
    if (gift.length > 0) {
      let paper= c.repeat(gift.length+2);
      let word=paper+l+gift+r+paper;
      wrapped.push(word);
    }
  });

  /* Puntuacion 69
    for (let i=0; i<gifts.length; i++) {
      let count=gifts[i].length;
      if (count >0) {
        let paper= c.repeat(count+2);
        let word=paper+l+gifts[i]+r+paper;
        console.log(word);
        wrapped.push(word);
      }
    }
  */

  return wrapped;
}

const gifts = ['cat', 'game', 'socks']

const wrapped = wrapping(gifts)

console.log(wrapped)