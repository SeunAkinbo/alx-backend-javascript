import signUpUser from '../4-user-promise';

test('signUpUser resolves with firstName and lastName', () => {
  const firstName = 'John';
  const lastName = 'Doe';

  return signUpUser(firstName, lastName).then(user => {
    expect(user).toEqual({ firstName, lastName });
  });
});

test('signUpUser resolves with empty strings if no arguments provided', () => {
  return signUpUser().then(user => {
    expect(user).toEqual({ firstName: undefined, lastName: undefined });
  });
});
