import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${Currency.name} (${Currency.code})`;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // get currency() {
  //   return this._currency;
  // }

  // set currency(newCurrency) {
  //   if (typeof newCurrency !== Currency) {
  //     throw new TypeError('Currency must follow Currency format')
  //   }
  //   this._currency = newCurrency;
  // }
}
