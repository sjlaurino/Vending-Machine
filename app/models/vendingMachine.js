

import Snack from "./snack.js";



export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: new Snack('Cheetos', .75, 'A1'),
      a2: new Snack('Snickers', 1.00, 'A2'),
      a3: new Snack('Butterfinger', 1.00, 'A3')
    }
    this.bal = 0
  }
}