// 3-currency.test.js
import Currency from '../3-currency';

describe('Currency', () => {
  it('should create a new Currency object with the correct attributes', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.code).toBe('USD');
    expect(currency.name).toBe('United States Dollar');
  });

  it('should throw an error if the code is not a string', () => {
    expect(() => new Currency(123, 'United States Dollar')).toThrowError(TypeError);
  });

  it('should throw an error if the name is not a string', () => {
    expect(() => new Currency('USD', 123)).toThrowError(TypeError);
  });

  it('should allow updating the code and name using setters', () => {
    const currency = new Currency('USD', 'United States Dollar');
    currency.code = 'EUR';
    currency.name = 'Euro';
    expect(currency.code).toBe('EUR');
    expect(currency.name).toBe('Euro');
  });

  it('should throw an error if the new code is not a string', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(() => { currency.code = 123; }).toThrowError(TypeError);
  });

  it('should throw an error if the new name is not a string', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(() => { currency.name = 123; }).toThrowError(TypeError);
  });

  it('should display the full currency representation correctly', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.displayFullCurrency()).toBe('United States Dollar (USD)');
  });
});
