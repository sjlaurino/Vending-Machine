import Snack from "./snack";

export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: new Snack(),
      a2: new Snack(),
      a3: new Snack()
    }
  }
}