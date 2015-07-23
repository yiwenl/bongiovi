// SceneApp.js

// var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;
var ViewPlane = require("./ViewPlane");
var ViewSphere = require("./ViewSphere");
var ViewLight = require("./ViewLight");

function SceneApp() {
	bongiovi.Scene.call(this);
	this.lightPos = [0, 0, 0];
	this.count = 0;
	this.camera.radius.value = 1000;
	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	this._vAxis = new bongiovi.ViewAxis(1);
	this._vDotPlane = new bongiovi.ViewDotPlane();

	this._vPlane = new ViewPlane();
	this._vSphere = new ViewSphere();
	this._vLight = new ViewLight;
};


p._initTextures = function() {
};


p.render = function() {
	this._updateLight();
	var grey = .11;
	GL.clear(grey, grey, grey, 1.0);

	this._vAxis.render();
	this._vDotPlane.render();
	// this._vPlane.render();
	this._vSphere.render();
	this._vLight.render(this.lightPos);
};


p._updateLight = function() {
	var radius = 400;
	this.count += .01;
	this.lightPos[0] = Math.cos(this.count) * radius;
	this.lightPos[1] = Math.cos(this.count + Math.sin(this.count)) * radius * .25;
	this.lightPos[2] = Math.sin(this.count) * radius;
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;