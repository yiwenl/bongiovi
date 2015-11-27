// SceneApp.js

var GL = bongiovi.GL, gl;
var ViewPlane = require("./ViewPlane");
var ViewSphere = require("./ViewSphere");
var ViewBox = require("./ViewBox");
var ViewTree = require("./ViewTree");

function SceneApp() {
	gl = GL.gl;
	bongiovi.Scene.call(this);
	this.lightPosition = [0, 0, 0];
	this.count = 0;

	this.sceneRotation.lock(true);
	this.camera.lockRotation(false);

	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();

p._initTextures = function() {
	console.log('Init Textures');
	this._textureGold = new bongiovi.GLTexture(images.gold);
};

p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis();
	this._vDotPlane = new bongiovi.ViewDotPlane();
	this._vPlane = new ViewPlane();
	this._vSphere = new ViewSphere();
	this._vBox = new ViewBox();
	this._vTree = new ViewTree();
};

p.render = function() {
	this.count += .01;
	var r = 150;
	this.lightPosition[0] = Math.cos(this.count) * r;
	this.lightPosition[1] = Math.sin(this.count * .75) * 50 + 60;
	this.lightPosition[2] = Math.sin(this.count) * r;


	this._vAxis.render();
	this._vDotPlane.render();
	// this._vPlane.render(this.lightPosition);
	this._vPlane.render(this.lightPosition, this._textureGold);
	this._vSphere.render(this.lightPosition);
	// this._vBox.render(this.lightPosition);
	this._vTree.render(this.lightPosition);
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;