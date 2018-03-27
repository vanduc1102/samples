class Vehicle {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
  getName () {
    return this.name;
  }
  getType () {
    return this.type;
  }
  setUp(){
    console.log('This is setup branch.');
  }
  run(){
    this.setUp();
    console.log('Vehicle is running');
  }
}

module.exports = Vehicle;