// 0-promise.test.js
import getResponseFromAPI from '../0-promise';

test('getResponseFromAPI returns a Promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});

test('getResponseFromAPI resolves successfully', async () => {
  const response = await getResponseFromAPI();
  expect(response).toBe('Success!');
});

test('getResponseFromAPI handles rejection', async () => {
  // To test rejection, you may need to modify the getResponseFromAPI
  // function temporarily to simulate a failure, or use a mock.
});
