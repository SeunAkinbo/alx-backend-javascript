import ClassRoom from '../0-classroom';

describe('ClassRoom', () => {
  test('should create a ClassRoom instance with maxStudentsSize', () => {
    const maxStudentsSize = 30;
    const classRoom = new ClassRoom(maxStudentsSize);
    expect(classRoom._maxStudentsSize).toBe(maxStudentsSize);
  });

  test('should create a ClassRoom instance with a different maxStudentsSize', () => {
    const maxStudentsSize = 25;
    const classRoom = new ClassRoom(maxStudentsSize);
    expect(classRoom._maxStudentsSize).toBe(maxStudentsSize);
  });
});
