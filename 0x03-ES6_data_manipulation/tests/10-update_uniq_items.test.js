// 10-update_uniq_items.test.js
import updateUniqueItems from '../10-update_uniq_items';

test('updateUniqueItems updates the quantity of items with initial quantity of 1 to 100', () => {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  updateUniqueItems(groceries);

  expect(groceries.get('Pasta')).toBe(100);
  expect(groceries.get('Rice')).toBe(100);
});

test('updateUniqueItems does not change the quantity of items with initial quantity other than 1', () => {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  updateUniqueItems(groceries);

  expect(groceries.get('Apples')).toBe(10);
  expect(groceries.get('Tomatoes')).toBe(10);
  expect(groceries.get('Banana')).toBe(5);
});

test('updateUniqueItems throws an error if the argument is not a map', () => {
  expect(() => updateUniqueItems({ 'Apples': 10 })).toThrow('Cannot process');
  expect(() => updateUniqueItems([['Apples', 10]])).toThrow('Cannot process');
  expect(() => updateUniqueItems(null)).toThrow('Cannot process');
});
