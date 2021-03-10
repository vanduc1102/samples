'use strict';

const Vehicle = require('./vehicle');
const Car = require('./car');

let vehicle = new Vehicle('mybike','bike');
let car = new Car('mycard');
console.log(vehicle.getName());
console.log(car.getName());
car.setUp();
car.run();
