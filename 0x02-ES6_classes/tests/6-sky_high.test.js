// Import the class
import SkyHighBuilding from '../6-sky_high';

describe('SkyHighBuilding', () => {
  test('should create a SkyHighBuilding instance with sqft and floors', () => {
    const sqft = 10000;
    const floors = 50;
    const building = new SkyHighBuilding(sqft, floors);

    expect(building).toBeInstanceOf(SkyHighBuilding);
    expect(building.sqft).toBe(sqft);
    expect(building.floors).toBe(floors);
  });

  test('evacuationWarningMessage should return a message with the number of floors', () => {
    const sqft = 10000;
    const floors = 50;
    const building = new SkyHighBuilding(sqft, floors);

    const message = building.evacuationWarningMessage();
    expect(message).toBe(`Evacuate slowly the ${floors} floors`);
  });

});
