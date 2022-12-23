/**
 * Santa Claus necesita hacer una revisión de sus cajas de regalos
 * para asegurarse de que puede empaquetarlas todas en su trineo.
 * Cuenta con una serie de cajas de diferentes tamaños, que se
 * caracterizan por su longitud, anchura y altura.
 * Tu tarea es escribir una función que, dada una lista de cajas con
 * sus tamaños, determine si es posible empaquetar todas las cajas
 * en una sola de manera que cada caja contenga a otra (que a su
 * vez contenga a otra, y así sucesivamente).
 * Cada caja representa sus medidas con un objeto. Por ejemplo:
 * {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una
 * longitud de 2, una anchura de 3 y una altura de 2.
 * Una caja entra en otra caja si todos los lados de la primera son
 * menores a los lados de la segunda. Los elfos nos han dicho que
 * las cajas no se pueden rotar, así que no se puede poner una caja
 * de 2x3x2 en una caja de 3x2x2.
 */
function fitsInOneBox(boxes) {
  let a = [];
  let l = [];
  let w = [];
  let h = [];

  boxes.forEach((box) => {
    if ((l.indexOf(box.l)=== -1) && (w.indexOf(box.w)=== -1) && (h.indexOf(box.h)=== -1)) {
      console.log('jsjsj')
      l.push(box.l);
      w.push(box.w);
      h.push(box.h);
    }
    a.push(box.l*box.w*box.h);
    a.sort(function(a, b) { return a - b; });
  });
  console.log(l, l.length, w.length)
  if ((l.length!== a.length) ||(w.length !== a.length) || (h.length!== a.length))
    return false;
  
  for(let i = 0; i<a.length; i++){
    let j = i + 1
    if(j < a.length)
      if((Math.pow(a[j], 1 / 3)-Math.pow(a[i], 1 / 3)) < 1)
        return false;
  }

  return true;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2}
]

console.log(fitsInOneBox(boxes)); // true