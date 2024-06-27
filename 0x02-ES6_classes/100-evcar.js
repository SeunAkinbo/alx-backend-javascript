import Car from './10-car';

// Define the EVCar class that extends the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Define a getter for the range property
  get range() {
    return this._range;
  }

  // Define a method to clone the EVCar instance
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
