// 4-pricing.test.js
import Currency from '../3-currency';
import Pricing from '../4-pricing';

describe('Pricing', () => {
  it('should create a new Pricing object with the correct attributes', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);
    expect(pricing.amount).toBe(100);
    expect(pricing.currency).toEqual(currency);
  });

  it('should throw an error if the amount is not a number', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(() => new Pricing('100', currency)).toThrowError(TypeError);
  });

  it('should throw an error if the currency is not an instance of Currency', () => {
    expect(() => new Pricing(100, 'USD')).toThrowError(TypeError);
  });

  it('should allow updating the amount and currency using setters', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);
    pricing.amount = 200;
    pricing.currency = new Currency('EUR', 'Euro');
    expect(pricing.amount).toBe(200);
    expect(pricing.currency).toEqual(new Currency('EUR', 'Euro'));
  });

  it('should throw an error if the new amount is not a number', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);
    expect(() => { pricing.amount = '200'; }).toThrowError(TypeError);
  });

  it('should throw an error if the new currency is not an instance of Currency', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);
    expect(() => { pricing.currency = 'EUR'; }).toThrowError(TypeError);
  });

  it('should display the full price correctly', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);
    expect(pricing.displayFullPrice()).toBe('100 United States Dollar (USD)');
  });

  it('should convert the price correctly', () => {
    expect(Pricing.convertPrice(100, 0.85)).toBe(85);
  });

  it('should throw an error if the amount for conversion is not a number', () => {
    expect(() => Pricing.convertPrice('100', 0.85)).toThrowError(TypeError);
  });

  it('should throw an error if the conversion rate is not a number', () => {
    expect(() => Pricing.convertPrice(100, '0.85')).toThrowError(TypeError);
  });
});
