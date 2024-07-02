// 6-set.test.js
import setFromArray from '../6-set';

test('setFromArray creates a Set from an array', () => {
  const array = [1, 2, 3, 4, 5];
  const resultSet = setFromArray(array);
  const expectedSet = new Set([1, 2, 3, 4, 5]);
  
  expect(resultSet).toEqual(expectedSet);
});

test('setFromArray removes duplicate values from the array', () => {
  const array = [1, 2, 2, 3, 4, 5, 5];
  const resultSet = setFromArray(array);
  const expectedSet = new Set([1, 2, 3, 4, 5]);
  
  expect(resultSet).toEqual(expectedSet);
});

test('setFromArray handles an empty array', () => {
  const array = [];
  const resultSet = setFromArray(array);
  const expectedSet = new Set([]);
  
  expect(resultSet).toEqual(expectedSet);
});
