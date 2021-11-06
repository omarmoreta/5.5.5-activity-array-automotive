//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

class Sedan extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 6;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 200;
    this.fuel = 100;
    this.scheduleService = false;
    this.availableRoom = false;
    this.started = false;
  }
  loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
      this.availableRoom == true;
    }
  }
  start() {
    if (this.fuel > 0) {
      this.started == true;
    }
  }
  scheduleService(mileage) {
    if (this.mileage > 30000) {
      this.scheduleService == true;
    } else {
      this.scheduleService == false;
    }
  }
}
