// getListStudentIds.test.js
const getListStudentIds = require('../1-get_list_student_ids');
const getListStudents = require('../0-get_list_students');

test('getListStudentIds returns an array of ids from the list of student objects', () => {
  const students = getListStudents();
  const expectedIds = [1, 2, 5];
  
  const ids = getListStudentIds(students);
  expect(ids).toEqual(expectedIds);
});

test('getListStudentIds returns an empty array if the argument is not an array', () => {
  expect(getListStudentIds(null)).toEqual([]);
  expect(getListStudentIds({})).toEqual([]);
  expect(getListStudentIds('string')).toEqual([]);
  expect(getListStudentIds(123)).toEqual([]);
});
