function Vehicle (name, type) {
	this.name = name;
	this.type = type;
};
Vehicle.prototype.getName = function getName () {
	return this.name;
};
Vehicle.prototype.getType = function getType () {
	return this.type;
};

module.exports = Vehicle;
