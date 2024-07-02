// 10-update_uniq_items.test.js
import updateUniqueItems from '../10-update_uniq_items';
import groceriesList from '../9-groceries_list';

test('updateUniqueItems updates the quantity of items with initial quantity of 1 to 100', () => {
  const groceries = groceriesList();
  const updatedGroceries = updateUniqueItems(groceries);
  
  expect(updatedGroceries.get('Pasta')).toBe(100);
  expect(updatedGroceries.get('Rice')).toBe(100);
});

test('updateUniqueItems does not change the quantity of items with initial quantity other than 1', () => {
  const groceries = groceriesList();
  const updatedGroceries = updateUniqueItems(groceries);
  
  expect(updatedGroceries.get('Apples')).toBe(10);
  expect(updatedGroceries.get('Tomatoes')).toBe(10);
  expect(updatedGroceries.get('Banana')).toBe(5);
});

test('updateUniqueItems throws an error if the argument is not a map', () => {
  expect(() => updateUniqueItems({ 'Apples': 10 })).toThrow('Cannot process');
  expect(() => updateUniqueItems([['Apples', 10]])).toThrow('Cannot process');
  expect(() => updateUniqueItems(null)).toThrow('Cannot process');
});
