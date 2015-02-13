// Clazz.js

module.exports = function Clazz(name) {

	this.name = name;
	this.number = 0;

	var p = Clazz.prototype;

	p.log = function() {
		console.log("La Classe !", this.name, this.number);
	};


	p.add = function(value) {
		this.number += value;
	};

	return this;
};