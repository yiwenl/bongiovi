// CameraOrtho.js

"use strict";

var Camera = require("./Camera");
var glm = require("gl-matrix");


var CameraOrtho = function() {
	Camera.call(this);

	var eye            = glm.vec3.clone([0, 0, 500]  );
	var center         = glm.vec3.create( );
	var up             = glm.vec3.clone( [0,-1,0] );
	this.lookAt(eye, center, up);

	this.projection = glm.mat4.create();
};

var p = CameraOrtho.prototype = new Camera();


p.setBoundary = function(left, right, top, bottom) {
	this.left = left;
	this.right = right;
	this.top = top;
	this.bottom = bottom;
	glm.mat4.ortho(this.projection, left, right, top, bottom, 0, 10000);
};


p.ortho = p.setBoundary;

p.getMatrix = function() {
	return this.matrix;
};


p.resize = function() {
	glm.mat4.ortho(this.projection, this.left, this.right, this.top, this.bottom, 0, 10000);
};


module.exports = CameraOrtho;