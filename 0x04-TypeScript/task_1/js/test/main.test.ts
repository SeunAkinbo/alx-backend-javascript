import { Teacher, Directors, teachersList } from './main';

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
    expect(teachersList.length).toBe(3);
    expect(teachersList[0].firstName).toBe('Alice');
    expect(teachersList[1].location).toBe('Los Angeles');
  });
});

describe('Directors interface', () => {
  test('should create a director with required attributes', () => {
    const director: Directors = {
      firstName: 'Carol',
      lastName: 'Williams',
      fullTimeEmployee: true,
      location: 'San Francisco',
      numberOfReports: 5,
    };
    expect(director.firstName).toBe('Carol');
    expect(director.lastName).toBe('Williams');
    expect(director.fullTimeEmployee).toBe(true);
    expect(director.location).toBe('San Francisco');
    expect(director.numberOfReports).toBe(5);
  });

  test('should inherit attributes from Teacher', () => {
    const director: Directors = {
      firstName: 'Sam',
      lastName: 'Green',
      fullTimeEmployee: false,
      location: 'Miami',
      numberOfReports: 3,
      yearsOfExperience: 12,
    };
    expect(director.firstName).toBe('Sam');
    expect(director.lastName).toBe('Green');
    expect(director.fullTimeEmployee).toBe(false);
    expect(director.location).toBe('Miami');
    expect(director.numberOfReports).toBe(3);
    expect(director.yearsOfExperience).toBe(12);
  });
});
