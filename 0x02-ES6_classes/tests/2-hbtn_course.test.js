// 2-hbtn_courses.test.js
import HolbertonCourse from '../2-hbtn_course';

describe('HolbertonCourse', () => {
  it('should create a new HolbertonCourse object with the correct attributes', () => {
    const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
    expect(course.name).toBe('JavaScript');
    expect(course.length).toBe(12);
    expect(course.students).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should throw an error if the name is not a string', () => {
    expect(() => new HolbertonCourse(123, 12, ['Alice', 'Bob', 'Charlie'])).toThrowError(TypeError);
  });

  it('should throw an error if the length is not a number', () => {
    expect(() => new HolbertonCourse('JavaScript', '12', ['Alice', 'Bob', 'Charlie'])).toThrowError(TypeError);
  });

  it('should throw an error if the students are not an array of strings', () => {
    expect(() => new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 123])).toThrowError(TypeError);
  });

  it('should allow updating the name, length, and students using setters', () => {
    const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
    course.name = 'Python';
    course.length = 10;
    course.students = ['David', 'Eve'];
    expect(course.name).toBe('Python');
    expect(course.length).toBe(10);
    expect(course.students).toEqual(['David', 'Eve']);
  });

  it('should throw an error if the new name is not a string', () => {
    const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
    expect(() => { course.name = 123; }).toThrowError(TypeError);
  });

  it('should throw an error if the new length is not a number', () => {
    const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
    expect(() => { course.length = '10'; }).toThrowError(TypeError);
  });

  it('should throw an error if the new students are not an array of strings', () => {
    const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
    expect(() => { course.students = ['David', 'Eve', 123]; }).toThrowError(TypeError);
  });
});
