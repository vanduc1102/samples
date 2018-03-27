const Vehicle = require

function Car (name) {
	Vehicle.call(this, name, 'car');
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.parent = Vehicle.prototype;
Car.prototype.getName = function () {
	return 'It is a car: '+ this.name;
};

  module.exports = Car;
