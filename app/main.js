import VendrController from "./components/vendrcontroller.js";

class App {
  constructor() {
    this.controllers = {
      vendrController: new VendrController()
    }
  }
}




// @ts-ignore
window.app = new App()