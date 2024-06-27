import Car from '../10-car';
import EVCar from '../100-evcar';

describe('EVCar', () => {
  it('should create a new EVCar object with the correct attributes', () => {
    const evCar = new EVCar('Tesla', 'Electric', 'red', 300);
    expect(evCar.brand).toBe('Tesla');
    expect(evCar.motor).toBe('Electric');
    expect(evCar.color).toBe('red');
    expect(evCar.range).toBe(300);
  });

  it('should clone an EVCar object correctly', () => {
    const originalEVCar = new EVCar('Tesla', 'Electric', 'red', 300);
    const clonedEVCar = originalEVCar.cloneCar();

    expect(clonedEVCar).toBeInstanceOf(Car);
    expect(clonedEVCar.brand).toBe('Tesla');
    expect(clonedEVCar.motor).toBe('Electric');
    expect(clonedEVCar.color).toBe('red');

    // Ensure the cloned car is a new instance
    expect(clonedEVCar).not.toBe(originalEVCar);
  });
});
