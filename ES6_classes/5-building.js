export default class Building {
  constructor(sqft) {
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
