// getListStudents.test.js
const getListStudents = require('../0-get_list_students');

test('getListStudents returns an array of student objects', () => {
  const expectedStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];

  const students = getListStudents();
  expect(students).toEqual(expectedStudents);
});
