// CameraPerspective.js
"use strict";

var Camera = require("./Camera");
var glm = require("gl-matrix");

var CameraPerspective = function() {
	Camera.call(this);

	this.projection = glm.mat4.create();
	this.mtxFinal = glm.mat4.create();
};

var p = CameraPerspective.prototype = new Camera();

p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
	this._fov = aFov;
	this._near = aNear;
	this._far = aFar;
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
};

p.getMatrix = function() {
	// mat4.multiply(this.mtxFinal, this.projection, this.matrix);
	return this.matrix;
};

p.resize = function(aAspectRatio) {
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, this._fov, aAspectRatio, this._near, this._far);
};

p.__defineGetter__("near", function() {
	return this._near;
});

p.__defineGetter__("far", function() {
	return this._far;
});

module.exports = CameraPerspective;