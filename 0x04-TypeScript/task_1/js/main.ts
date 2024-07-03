// js/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'New York',
  contract: false,
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullTimeEmployee: false,
  yearsOfExperience: 10,
  location: 'Los Angeles',
  contract: true,
};

const director1: Directors = {
  firstName: 'Carol',
  lastName: 'Williams',
  fullTimeEmployee: true,
  location: 'San Francisco',
  numberOfReports: 5,
};

const teachersList: Teacher[] = [teacher1, teacher2, director1];

export { Teacher, Directors, teachersList };
