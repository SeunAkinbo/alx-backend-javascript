// 5-building.test.js
import Building from '../5-building';

describe('Building', () => {
  it('should create a new Building object with the correct attributes', () => {
    const building = new Building(10000);
    expect(building.sqft).toBe(10000);
  });

  it('should allow updating the sqft using the setter', () => {
    const building = new Building(10000);
    building.sqft = 20000;
    expect(building.sqft).toBe(20000);
  });

  it('should throw an error if the class extending Building does not override evacuationWarningMessage', () => {
    class TestBuilding extends Building {
      // No evacuationWarningMessage method
    }

    expect(() => new TestBuilding(10000)).toThrowError(
      'Class extending Building must override evacuationWarningMessage'
    );
  });

  it('should not throw an error if the class extending Building overrides evacuationWarningMessage', () => {
    class TestBuilding extends Building {
      evacuationWarningMessage() {
        return 'Evacuation warning';
      }
    }

    expect(() => new TestBuilding(10000)).not.toThrowError();
  });
});

