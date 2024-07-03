import { JSDOM } from 'jsdom';
import { Student } from '../main';

// Mocking the document
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;

describe('Table rendering', () => {
  let studentsList: Student[];

  beforeAll(() => {
    studentsList = [
      { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' },
      { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles' },
    ];

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach((student) => {
      const row = document.createElement('tr');

      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);

      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(locationCell);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
  });

  test('should render a table with students', () => {
    const tableRows = document.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(studentsList.length);

    tableRows.forEach((row, index) => {
      const cells = row.querySelectorAll('td');
      expect(cells.length).toBe(2);
      expect(cells[0].textContent).toBe(studentsList[index].firstName);
      expect(cells[1].textContent).toBe(studentsList[index].location);
    });
  });
});
