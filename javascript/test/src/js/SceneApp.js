// SceneApp.js

// var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;
var ViewPlane = require("./ViewPlane");

function SceneApp() {
	bongiovi.Scene.call(this);
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis(1);
	this._vPlane = new ViewPlane();
	this._vDotPlane = new bongiovi.ViewDotPlane();
};


p._initTextures = function() {
	console.log('Init Textures');
};


p.render = function() {
	var grey = .11;
	GL.clear(grey, grey, grey, 1.0);

	this._vPlane.render();
	this._vAxis.render();
	this._vDotPlane.render();
};

module.exports = SceneApp;