import getFullResponseFromAPI from '../1-promise';

describe('getFullResponseFromAPI', () => {
  it('should resolve with an object containing status 200 and body "Success" when success is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response).toEqual({
      status: 200,
      body: 'Success'
    });
  });

  it('should reject with an error when success is false', async () => {
    expect.assertions(1);
    try {
      await getFullResponseFromAPI(false);
    } catch (error) {
      expect(error).toEqual(new Error('The fake API is not working currently'));
    }
  });
});
