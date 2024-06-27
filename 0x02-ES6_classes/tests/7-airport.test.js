import Airport from '../7-airport';

describe('Airport', () => {
  test('should create an Airport instance with name and code', () => {
    const name = 'Los Angeles International Airport';
    const code = 'LAX';
    const airport = new Airport(name, code);

    expect(airport).toBeInstanceOf(Airport);
    expect(airport.name).toBe(name);
    expect(airport.code).toBe(code);
  });

  test('toString method should return a formatted string', () => {
    const name = 'Los Angeles International Airport';
    const code = 'LAX';
    const airport = new Airport(name, code);

    const expectedString = `[object ${code}]`;
    expect(airport.toString()).toBe(expectedString);
  });
});
