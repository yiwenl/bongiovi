"use strict";

var glm = require("gl-matrix");

var Camera = function() {
	this.matrix = glm.mat4.create();
	glm.mat4.identity(this.matrix);

	this.position = glm.vec3.create();
};

var p = Camera.prototype;

p.lookAt = function(aEye, aCenter, aUp) {
	glm.vec3.copy(this.position, aEye);
	glm.mat4.identity(this.matrix);
	glm.mat4.lookAt(this.matrix, aEye, aCenter, aUp);
};

p.getMatrix = function() {
	return this.matrix;
};

module.exports = Camera;