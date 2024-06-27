import Car from '../10-car';

describe('Car', () => {
  it('should create a new Car object with the correct attributes', () => {
    const car = new Car('Toyota', 'V6', 'red');
    expect(car.brand).toBe('Toyota');
    expect(car.motor).toBe('V6');
    expect(car.color).toBe('red');
  });

  it('should clone a Car object correctly', () => {
    const originalCar = new Car('Toyota', 'V6', 'red');
    const clonedCar = originalCar.cloneCar();

    expect(clonedCar).toBeInstanceOf(Car);
    expect(clonedCar.brand).toBe('Toyota');
    expect(clonedCar.motor).toBe('V6');
    expect(clonedCar.color).toBe('red');

    // Ensure the cloned car is a new instance
    expect(clonedCar).not.toBe(originalCar);
  });
});
