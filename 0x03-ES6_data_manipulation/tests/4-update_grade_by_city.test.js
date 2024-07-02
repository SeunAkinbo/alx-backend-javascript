// updateStudentGradeByCity.test.js
const updateStudentGradeByCity = require('../4-update_grade_by_city');
const getListStudents = require('../0-get_list_students');

test('updateStudentGradeByCity returns an array of students for a specific city with their new grade', () => {
  const students = getListStudents();
  const city = 'San Francisco';
  const newGrades = [
    { studentId: 1, grade: 85 },
    { studentId: 5, grade: 90 }
  ];
  const expectedStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 85 },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 90 }
  ];

  const updatedStudents = updateStudentGradeByCity(students, city, newGrades);
  expect(updatedStudents).toEqual(expectedStudents);
});

test('updateStudentGradeByCity assigns grade "N/A" if no grade is found for a student', () => {
  const students = getListStudents();
  const city = 'San Francisco';
  const newGrades = [
    { studentId: 1, grade: 85 }
  ];
  const expectedStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 85 },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 'N/A' }
  ];

  const updatedStudents = updateStudentGradeByCity(students, city, newGrades);
  expect(updatedStudents).toEqual(expectedStudents);
});

test('updateStudentGradeByCity returns an empty array if the argument is not an array', () => {
  const city = 'San Francisco';
  const newGrades = [
    { studentId: 1, grade: 85 }
  ];
  expect(updateStudentGradeByCity(null, city, newGrades)).toEqual([]);
  expect(updateStudentGradeByCity({}, city, newGrades)).toEqual([]);
  expect(updateStudentGradeByCity('string', city, newGrades)).toEqual([]);
  expect(updateStudentGradeByCity(123, city, newGrades)).toEqual([]);
});

test('updateStudentGradeByCity returns an empty array if the city is not a string', () => {
  const students = getListStudents();
  const newGrades = [
    { studentId: 1, grade: 85 }
  ];
  expect(updateStudentGradeByCity(students, null, newGrades)).toEqual([]);
  expect(updateStudentGradeByCity(students, {}, newGrades)).toEqual([]);
  expect(updateStudentGradeByCity(students, 123, newGrades)).toEqual([]);
});

test('updateStudentGradeByCity returns an empty array if newGrades is not an array', () => {
  const students = getListStudents();
  const city = 'San Francisco';
  expect(updateStudentGradeByCity(students, city, null)).toEqual([]);
  expect(updateStudentGradeByCity(students, city, {})).toEqual([]);
  expect(updateStudentGradeByCity(students, city, 'string')).toEqual([]);
  expect(updateStudentGradeByCity(students, city, 123)).toEqual([]);
});

