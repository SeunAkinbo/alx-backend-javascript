// 9-groceries_list.test.js
import groceriesList from '../9-groceries_list';

test('groceriesList returns a map of groceries with the correct items and quantities', () => {
  const groceries = groceriesList();
  
  expect(groceries.has('Apples')).toBe(true);
  expect(groceries.get('Apples')).toBe(10);
  
  expect(groceries.has('Tomatoes')).toBe(true);
  expect(groceries.get('Tomatoes')).toBe(10);
  
  expect(groceries.has('Pasta')).toBe(true);
  expect(groceries.get('Pasta')).toBe(1);
  
  expect(groceries.has('Rice')).toBe(true);
  expect(groceries.get('Rice')).toBe(1);
  
  expect(groceries.has('Banana')).toBe(true);
  expect(groceries.get('Banana')).toBe(5);
});

test('groceriesList returns a map with the correct number of items', () => {
  const groceries = groceriesList();
  
  expect(groceries.size).toBe(5);
});

test('groceriesList should return an instance of Map', () => {
  const groceries = groceriesList();
  
  expect(groceries).toBeInstanceOf(Map);
});
