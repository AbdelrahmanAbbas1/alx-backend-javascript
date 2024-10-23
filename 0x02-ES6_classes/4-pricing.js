import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('amount must be a number');
    } else {
      this._amount = value;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency !== true) {
      throw TypeError('currency must be an instance of Currency');
    } else {
      this._currency = value;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, convesionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }
    if (typeof convesionRate !== 'number') {
      throw TypeError('conversionRate must be a number');
    }
    return amount * convesionRate;
  }
}
