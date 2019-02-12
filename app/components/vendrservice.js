



//Private
import VendingMachine from '../models/vendingMachine.js'
let vendingMachine = new VendingMachine()

let _buyer = new Buyer('Steven');



//Public
export default class VendrService {
  constructor() {
  }
  get Balance() {
    return _buyer.balance
  }

  addQuarter() {
    _buyer.balance += .25
  }
}