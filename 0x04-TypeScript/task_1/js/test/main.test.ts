import { Teacher, teachersList } from '../main';

describe('Teacher interface', () => {
  test('should create a teacher with required attributes', () => {
    const teacher: Teacher = {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      location: 'Boston',
    };
    expect(teacher.firstName).toBe('John');
    expect(teacher.lastName).toBe('Doe');
    expect(teacher.fullTimeEmployee).toBe(true);
    expect(teacher.location).toBe('Boston');
  });

  test('should allow optional attribute yearsOfExperience', () => {
    const teacher: Teacher = {
      firstName: 'Jane',
      lastName: 'Doe',
      fullTimeEmployee: false,
      location: 'Chicago',
      yearsOfExperience: 5,
    };
    expect(teacher.yearsOfExperience).toBe(5);
  });

  test('should allow additional properties', () => {
    const teacher: Teacher = {
      firstName: 'Jim',
      lastName: 'Beam',
      fullTimeEmployee: true,
      location: 'Dallas',
      contract: true,
    };
    expect(teacher.contract).toBe(true);
  });

  test('should have a list of teachers', () => {
    expect(teachersList.length).toBe(2);
    expect(teachersList[0].firstName).toBe('Alice');
    expect(teachersList[1].location).toBe('Los Angeles');
  });
});
