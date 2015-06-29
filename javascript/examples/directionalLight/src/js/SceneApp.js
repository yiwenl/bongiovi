// SceneApp.js

// var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;
var ViewPlane = require("./ViewPlane");

function SceneApp() {
	bongiovi.Scene.call(this);
	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	// this._vAxis = new bongiovi.ViewAxis(1);
	// this._vDotPlane = new bongiovi.ViewDotPlane();

	this._vPlane = new ViewPlane();
};


p._initTextures = function() {
};


p.render = function() {
	var grey = .11;
	GL.clear(grey, grey, grey, 1.0);

	// this._vAxis.render();
	// this._vDotPlane.render();
	this._vPlane.render();
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;