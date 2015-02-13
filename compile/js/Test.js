// Test.js

module.exports = function Test() {
	var name = "bongiovi";

	var hello = function() {
		console.log('Hello', name);
		return this;
	}

	return Object.freeze({
		hello:hello
	});
}

