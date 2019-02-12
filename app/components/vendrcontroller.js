


//private
import VendrService from "./vendrservice.js";
// let vendrController = new VendrService()

let vendrServ = new VendrService()

function draw() {

  let b = vendrServ.Balance
  document.getElementById('bal').innerText = 'Balance:$ ' + b.toFixed(2)
}


//public
export default class VendrController {
  constructor() {
  }
  addQuarter() {
    vendrServ.addQuarter()
    draw()
  }
}