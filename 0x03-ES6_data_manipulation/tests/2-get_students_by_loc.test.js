// getStudentsByLocation.test.js
const getStudentsByLocation = require('../2-get_students_by_loc');
const getListStudents = require('../0-get_list_students');

test('getStudentsByLocation returns an array of students located in the specified city', () => {
  const students = getListStudents();
  const city = 'San Francisco';
  const expectedStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];

  const filteredStudents = getStudentsByLocation(students, city);
  expect(filteredStudents).toEqual(expectedStudents);
});

test('getStudentsByLocation returns an empty array if no students are located in the specified city', () => {
  const students = getListStudents();
  const city = 'New York';
  
  const filteredStudents = getStudentsByLocation(students, city);
  expect(filteredStudents).toEqual([]);
});

test('getStudentsByLocation returns an empty array if the argument is not an array', () => {
  const city = 'San Francisco';
  expect(getStudentsByLocation(null, city)).toEqual([]);
  expect(getStudentsByLocation({}, city)).toEqual([]);
  expect(getStudentsByLocation('string', city)).toEqual([]);
  expect(getStudentsByLocation(123, city)).toEqual([]);
});

test('getStudentsByLocation returns an empty array if the city is not a string', () => {
  const students = getListStudents();
  expect(getStudentsByLocation(students, null)).toEqual([]);
  expect(getStudentsByLocation(students, {})).toEqual([]);
  expect(getStudentsByLocation(students, 123)).toEqual([]);
});
