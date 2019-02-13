



//Private
import VendingMachine from '../models/vendingMachine.js'
let vendingMachine = new VendingMachine()

let snacks = vendingMachine.snacks




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
  purchase(itemNum) {
    let target = snacks[itemNum]
    if (target.price <= vendingMachine.bal) {
      return vendingMachine.bal -= target.price
    } else {
      alert('insufficient funds')
    }
  }
}