export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw TypeError('code must be a string');
    } else {
      this._code = value;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('name must be a string');
    } else {
      this._name = value;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
