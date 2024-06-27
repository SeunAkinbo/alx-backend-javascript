import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /* Getter and Setter for floor */
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  /* String reperesentation */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
