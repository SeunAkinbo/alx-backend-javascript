import handleResponseFromAPI from '../2-then';
import getFullResponseFromAPI from '../1-promise';

describe('handleResponseFromAPI', () => {
  it('should return the correct response for a resolved promise', async () => {
    const mockPromise = Promise.resolve({ status: 200, body: 'success' });

    const result = await handleResponseFromAPI(mockPromise);
    expect(result).toEqual({ status: 200, body: 'success' });
  });

  it('should return an error object for a rejected promise', async () => {
    const mockPromise = Promise.reject(new Error('The fake API is not working currently'));

    const result = await handleResponseFromAPI(mockPromise);
    expect(result).toBeInstanceOf(Error);
  });

  it('should log "Got a response from the API" to the console', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const mockPromise = Promise.resolve({ status: 200, body: 'success' });

    await handleResponseFromAPI(mockPromise);
    expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');

    consoleSpy.mockRestore();
  });
});

