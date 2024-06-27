// 8-hbtn_class.test.js
import HolbertonClass from '../8-hbtn_class';

describe('HolbertonClass', () => {
  it('should create a new HolbertonClass object with the correct attributes', () => {
    const hbtnClass = new HolbertonClass(12, 'San Francisco');
    expect(hbtnClass.size).toBe(12);
    expect(hbtnClass.location).toBe('San Francisco');
  });

  it('should allow updating the size and location using setters', () => {
    const hbtnClass = new HolbertonClass(12, 'San Francisco');
    hbtnClass.size = 15;
    hbtnClass.location = 'New York';
    expect(hbtnClass.size).toBe(15);
    expect(hbtnClass.location).toBe('New York');
  });

  it('should throw an error if the size is not a number', () => {
    const hbtnClass = new HolbertonClass(12, 'San Francisco');
    expect(() => { hbtnClass.size = '15'; }).toThrowError(TypeError);
  });

  it('should throw an error if the location is not a string', () => {
    const hbtnClass = new HolbertonClass(12, 'San Francisco');
    expect(() => { hbtnClass.location = 123; }).toThrowError(TypeError);
  });

  it('should return the correct value when using the valueOf method', () => {
    const hbtnClass = new HolbertonClass(12, 'San Francisco');
    expect(hbtnClass.valueOf()).toBe(12);
  });

  it('should return the correct string representation when using the toString method', () => {
    const hbtnClass = new HolbertonClass(12, 'San Francisco');
    expect(hbtnClass.toString()).toBe('San Francisco');
  });
});
