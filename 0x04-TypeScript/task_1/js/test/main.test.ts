import { Teacher, Directors, printTeacherFunction, printTeacher, StudentClass, StudentClassInterface } from './main';

describe('Teacher interface', () => {
  // ... (previous tests)

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

  // ... (other tests)
});

describe('Directors interface', () => {
  // ... (previous tests)

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

  // ... (other tests)
});

describe('printTeacher function', () => {
  test('should return the correct format', () => {
    expect(printTeacher('John', 'Doe')).toBe('J. Doe');
    expect(printTeacher('Alice', 'Johnson')).toBe('A. Johnson');
  });
});

describe('StudentClass', () => {
  test('should create a student with firstName and lastName', () => {
    const student: StudentClassInterface = new StudentClass('Jane', 'Doe');
    expect(student.displayName()).toBe('Jane');
  });

  test('should return the correct string when workOnHomework is called', () => {
    const student: StudentClassInterface = new StudentClass('Jane', 'Doe');
    expect(student.workOnHomework()).toBe('Currently working');
  });
});
