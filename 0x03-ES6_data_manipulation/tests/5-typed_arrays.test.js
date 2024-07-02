// 5-typed_arrays.test.js
import createInt8TypedArray from '../5-typed_arrays';

test('createInt8TypedArray returns a DataView with an Int8 value at the specified position', () => {
  const length = 10;
  const position = 2;
  const value = 5;
  
  const dataView = createInt8TypedArray(length, position, value);
  
  expect(dataView.getInt8(position)).toBe(value);
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

test('createInt8TypedArray returns a DataView with correct length', () => {
  const length = 10;
  const position = 2;
  const value = 5;
  
  const dataView = createInt8TypedArray(length, position, value);
  
  expect(dataView.byteLength).toBe(length);
});
