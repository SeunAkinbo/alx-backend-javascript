import handleProfileSignup from '../3-all';
import { uploadPhoto, createUser } from '../utils';

jest.mock('./utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

describe('handleProfileSignup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log the correct message on successful signup', async () => {
    const uploadPhotoResponse = { body: 'Photo uploaded successfully' };
    const createUserResponse = { firstName: 'John', lastName: 'Doe' };

    uploadPhoto.mockResolvedValue(uploadPhotoResponse);
    createUser.mockResolvedValue(createUserResponse);

    const consoleSpy = jest.spyOn(console, 'log');

    await handleProfileSignup();

    expect(consoleSpy).toHaveBeenCalledWith(`${uploadPhotoResponse.body} ${createUserResponse.firstName} ${createUserResponse.lastName}`);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log "Signup system offline" on failure', async () => {
    uploadPhoto.mockRejectedValue();
    createUser.mockRejectedValue();

    const consoleSpy = jest.spyOn(console, 'log');

    await handleProfileSignup();

    expect(consoleSpy).toHaveBeenCalledWith('Signup system offline');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
