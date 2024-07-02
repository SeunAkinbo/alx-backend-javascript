// 8-clean_set.test.js
import cleanSet from '../8-clean_set';

test('cleanSet returns a string of all the set values that start with the specified startString', () => {
  const set = new Set(['startValue1', 'startValue2', 'noMatch', 'startValue3']);
  const startString = 'start';
  
  const result = cleanSet(set, startString);
  const expected = 'Value1-Value2-Value3';
  
  expect(result).toBe(expected);
});

test('cleanSet returns an empty string if no set values start with the specified startString', () => {
  const set = new Set(['value1', 'value2', 'value3']);
  const startString = 'start';
  
  const result = cleanSet(set, startString);
  const expected = '';
  
  expect(result).toBe(expected);
});

test('cleanSet returns an empty string if startString is an empty string', () => {
  const set = new Set(['startValue1', 'startValue2', 'value3']);
  const startString = '';
  
  const result = cleanSet(set, startString);
  const expected = '';
  
  expect(result).toBe(expected);
});

test('cleanSet handles an empty set', () => {
  const set = new Set();
  const startString = 'start';
  
  const result = cleanSet(set, startString);
  const expected = '';
  
  expect(result).toBe(expected);
});

test('cleanSet returns an empty string if startString is not a string', () => {
  const set = new Set(['startValue1', 'startValue2', 'value3']);
  const startString = 123; // Not a string
  
  const result = cleanSet(set, startString);
  const expected = '';
  
  expect(result).toBe(expected);
});
