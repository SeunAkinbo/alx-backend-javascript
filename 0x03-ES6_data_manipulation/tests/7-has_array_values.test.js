// 7-has_array_values.test.js
import hasValuesFromArray from '../7-has_array_values';

test('hasValuesFromArray returns true if all elements in the array exist within the set', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  const array = [1, 2, 3];
  
  expect(hasValuesFromArray(set, array)).toBe(true);
});

test('hasValuesFromArray returns false if any element in the array does not exist within the set', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  const array = [1, 2, 6];
  
  expect(hasValuesFromArray(set, array)).toBe(false);
});

test('hasValuesFromArray returns true for an empty array', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  const array = [];
  
  expect(hasValuesFromArray(set, array)).toBe(true);
});

test('hasValuesFromArray returns false if the set is empty and the array is not', () => {
  const set = new Set();
  const array = [1, 2, 3];
  
  expect(hasValuesFromArray(set, array)).toBe(false);
});

test('hasValuesFromArray returns true if both the set and array are empty', () => {
  const set = new Set();
  const array = [];
  
  expect(hasValuesFromArray(set, array)).toBe(true);
});
