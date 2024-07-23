// Your code here
// Base class Polygon
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter for the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter for the perimeter of the polygon
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  // Derived class Triangle
  class Triangle extends Polygon {
    // Getter to check if the triangle is valid
    get isValid() {
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  // Derived class Square
  class Square extends Polygon {
    // Getter to check if the square is valid
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // Getter for the area of the square
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      } else {
        throw new Error("Invalid square");
      }
    }
  }
  
  // Testing the classes
  
  // Creating a Polygon
  const polygon = new Polygon([5, 10, 5, 10]);
  console.log(`Polygon sides: ${polygon.sides}`); // [5, 10, 5, 10]
  console.log(`Polygon countSides: ${polygon.countSides}`); // 4
  console.log(`Polygon perimeter: ${polygon.perimeter}`); // 30
  
  // Creating a Triangle
  const triangle = new Triangle([3, 4, 5]);
  console.log(`Triangle sides: ${triangle.sides}`); // [3, 4, 5]
  console.log(`Triangle countSides: ${triangle.countSides}`); // 3
  console.log(`Triangle perimeter: ${triangle.perimeter}`); // 12
  console.log(`Triangle isValid: ${triangle.isValid}`); // true
  
  // Creating an invalid Triangle
  const invalidTriangle = new Triangle([1, 2, 3]);
  console.log(`Invalid Triangle isValid: ${invalidTriangle.isValid}`); // false
  
  // Creating a Square
  const square = new Square([4, 4, 4, 4]);
  console.log(`Square sides: ${square.sides}`); // [4, 4, 4, 4]
  console.log(`Square countSides: ${square.countSides}`); // 4
  console.log(`Square perimeter: ${square.perimeter}`); // 16
  console.log(`Square isValid: ${square.isValid}`); // true
  console.log(`Square area: ${square.area}`); // 16
  
  // Creating an invalid Square
  const invalidSquare = new Square([4, 4, 4, 5]);
  try {
    console.log(`Invalid Square area: ${invalidSquare.area}`);
  } catch (error) {
    console.log(error.message); // Invalid square
  }
  