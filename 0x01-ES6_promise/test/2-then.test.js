import handleResponseFromAPI from '../2-then';

describe('handleResponseFromAPI', () => {
  it('should return { status: 200, body: "success" } for a resolved promise', async () => {
    const mockPromise = Promise.resolve();

    const result = await handleResponseFromAPI(mockPromise);
    expect(result).toEqual({ status: 200, body: 'success' });
  });

  it('should return an Error object for a rejected promise', async () => {
    const mockPromise = Promise.reject();

    const result = await handleResponseFromAPI(mockPromise);
    expect(result).toBeInstanceOf(Error);
  });

  it('should log "Got a response from the API" to the console', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const mockPromise = Promise.resolve();

    await handleResponseFromAPI(mockPromise);
    expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');

    consoleSpy.mockRestore();
  });
});
