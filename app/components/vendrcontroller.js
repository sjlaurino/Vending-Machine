


//private
import VendrService from "./vendrservice.js";
let vendrController = new VendrService()

let vendrService = New VendrService()

function draw() {

  let b = vendrService.balance
  document.getElementById('bal').innerText = 'Balance: ' + b.toFixed(2)
}


//public
export default class VendrController {

}