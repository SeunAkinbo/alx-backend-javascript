import getResponseFromAPI from './0-promise';

test('getResponseFromAPI returns a Promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});

test('getResponseFromAPI resolves successfully', async () => {
  const response = await getResponseFromAPI();
  expect(response).toBe('Success!');
});
