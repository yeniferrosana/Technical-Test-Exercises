/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

class Triangle {
  constructor(height, base) {
    this.height = height;
    this.base = base;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return (this.base * this.height)/2;
  }
}

const square = new Rectangle(10, 10);

const rect = new Rectangle(12, 10);

const trian = new Triangle(10, 10);

console.log(square.area); 
console.log(rect.area); 
console.log(trian.area); 