// createInt8TypedArray.test.js
const createInt8TypedArray = require('../5-typed_arrays');

test('createInt8TypedArray returns a new ArrayBuffer with an Int8 value at the specified position', () => {
  const length = 10;
  const position = 2;
  const value = 5;
  
  const buffer = createInt8TypedArray(length, position, value);
  const int8Array = new Int8Array(buffer);
  
  expect(int8Array[position]).toBe(value);
});

test('createInt8TypedArray throws an error if the position is outside the range', () => {
  const length = 10;
  const invalidPosition = 10;
  const value = 5;

  expect(() => createInt8TypedArray(length, invalidPosition, value)).toThrow('Position outside range');
});

test('createInt8TypedArray throws an error if the position is negative', () => {
  const length = 10;
  const invalidPosition = -1;
  const value = 5;

  expect(() => createInt8TypedArray(length, invalidPosition, value)).toThrow('Position outside range');
});
