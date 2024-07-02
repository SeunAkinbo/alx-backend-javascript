// getStudentIdsSum.test.js
const getStudentIdsSum = require('../3-get_ids_sum');
const getListStudents = require('../0-get_list_students');

test('getStudentIdsSum returns the sum of all student ids', () => {
  const students = getListStudents();
  const expectedSum = 8; // 1 + 2 + 5 = 8
  
  const sum = getStudentIdsSum(students);
  expect(sum).toBe(expectedSum);
});

test('getStudentIdsSum returns 0 if the argument is not an array', () => {
  expect(getStudentIdsSum(null)).toBe(0);
  expect(getStudentIdsSum({})).toBe(0);
  expect(getStudentIdsSum('string')).toBe(0);
  expect(getStudentIdsSum(123)).toBe(0);
});

test('getStudentIdsSum returns 0 if the array is empty', () => {
  expect(getStudentIdsSum([])).toBe(0);
});
