const Vehicle = require('./vehicle');

class Car extends Vehicle {
	constructor (name) {
	  super(name, 'car');
	}
	getName () {
	  return 'It is a car: ' + super.getName();
	}
	setUp(){
		console.log('this is car setup.');
	}
	run(){
		console.log('car is running');
	}
}

module.exports = Car;