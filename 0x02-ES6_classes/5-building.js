export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /* Getter and Setter for sqft */
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
