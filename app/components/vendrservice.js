



//Private
import VendingMachine from '../models/vendingMachine.js'
let vendingMachine = new VendingMachine()

let Snacks = vendingMachine.snacks




//Public
export default class VendrService {
  constructor() {
  }
  get Balance() {
    return vendingMachine.bal
  }
  addQuarter() {
    vendingMachine.bal += .25

  }
}