// 6-sky_high.test.js
import Building from '../5-building';
import SkyHighBuilding from '../6-sky_high';

describe('SkyHighBuilding', () => {
  it('should create a new SkyHighBuilding object with the correct attributes', () => {
    const building = new SkyHighBuilding(10000, 50);
    expect(building.sqft).toBe(10000);
    expect(building.floors).toBe(50);
  });

  it('should allow updating the floors using the setter', () => {
    const building = new SkyHighBuilding(10000, 50);
    building.floors = 60;
    expect(building.floors).toBe(60);
  });

  it('should override the evacuationWarningMessage method', () => {
    const building = new SkyHighBuilding(10000, 50);
    expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 50 floors');
  });

  it('should inherit the sqft property and setter from the Building class', () => {
    const building = new SkyHighBuilding(10000, 50);
    building.sqft = 20000;
    expect(building.sqft).toBe(20000);
  });

  it('should throw an error if the class extending SkyHighBuilding does not override evacuationWarningMessage', () => {
    class TestBuilding extends SkyHighBuilding {
      // No evacuationWarningMessage method
    }

    expect(() => new TestBuilding(10000, 50)).toThrowError(
      'Class extending Building must override evacuationWarningMessage'
    );
  });

  it('should not throw an error if the class extending SkyHighBuilding overrides evacuationWarningMessage', () => {
    class TestBuilding extends SkyHighBuilding {
      evacuationWarningMessage() {
        return 'Evacuation warning';
      }
    }

    expect(() => new TestBuilding(10000, 50)).not.toThrowError();
  });
});
