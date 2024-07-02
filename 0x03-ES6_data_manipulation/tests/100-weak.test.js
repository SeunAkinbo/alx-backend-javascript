// 100-weak.test.js
import { weakMap, queryAPI } from '../100-weak';

test('queryAPI should track the number of calls for each endpoint', () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };

  expect(() => {
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
  }).not.toThrow();

  expect(weakMap.get(endpoint)).toBe(4);
});

test('queryAPI should throw an error when the number of queries is >= 5', () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };

  expect(() => {
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
  }).toThrow('Endpoint load is high');
});

test('queryAPI should track queries separately for different endpoints', () => {
  const endpoint1 = { protocol: 'http', name: 'getUsers' };
  const endpoint2 = { protocol: 'https', name: 'getAdmins' };

  queryAPI(endpoint1);
  queryAPI(endpoint1);
  queryAPI(endpoint2);

  expect(weakMap.get(endpoint1)).toBe(2);
  expect(weakMap.get(endpoint2)).toBe(1);
});
