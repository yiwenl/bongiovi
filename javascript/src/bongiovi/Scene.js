"use strict";

var GL = require("./GLTools");
var QuatRotation = require("./QuatRotation");
var CameraOrtho = require("./CameraOrtho");
var SimpleCamera = require("./SimpleCamera");
var glm = require("gl-matrix");

var Scene = function() {
	if(GL.canvas === null) {return;}
	this.gl = GL.gl;
	this._children = [];
	this._init();
};

var p = Scene.prototype;

p._init = function() {
	this.camera = new SimpleCamera(GL.canvas);
	this.camera.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
	this.camera.lockRotation();

	var eye                = glm.vec3.clone([0, 0, 500]  );
	var center             = glm.vec3.create( );
	var up                 = glm.vec3.clone( [0,-1,0] );
	this.camera.lookAt(eye, center, up);
	
	this.sceneRotation     = new QuatRotation(GL.canvas);
	this.rotationFront     = glm.mat4.create();
	glm.mat4.identity(this.rotationFront);
	
	this.cameraOrtho       = new CameraOrtho();
	this.cameraOrthoScreen = new CameraOrtho();
	this.cameraOtho        = this.cameraOrtho;

	this.cameraOrtho.lookAt(eye, center, up);
	this.cameraOrtho.ortho( 1, -1, 1, -1);

	this.cameraOrthoScreen.lookAt(eye, center, up);
	this.cameraOrthoScreen.ortho( 0, GL.width, GL.height, 0);

	// In SuperClass should call following functions.
	this._initTextures();
	this._initViews();

	window.addEventListener("resize", this._onResize.bind(this));
};

p._initTextures = function() {
	// console.log("Should be overwritten by SuperClass");
};

p._initViews = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.loop = function() {
	this.update();
	this.render();
};

p.update = function() {
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	this.sceneRotation.update();
	GL.setViewport(0, 0, GL.width, GL.height);
	GL.setMatrices(this.camera );
	GL.rotate(this.sceneRotation.matrix);

};

p.resize = function() {
	// if(this.camera.resize) {
	// 	this.camera.resize(GL.aspectRatio);
	// }
};

p.render = function() {

};

p._onResize = function() {
	this.cameraOrthoScreen.lookAt(eye, center, up);
	this.cameraOrthoScreen.ortho( 0, GL.width, GL.height, 0);
};

module.exports = Scene;