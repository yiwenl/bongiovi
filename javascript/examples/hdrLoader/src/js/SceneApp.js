// SceneApp.js

var GL = bongiovi.GL, gl;
var ViewPlane = require("./ViewPlane");

function SceneApp() {
	gl = GL.gl;
	bongiovi.Scene.call(this);

	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();

p._initTextures = function() {
	console.log('Init Textures', images);
	this.textureTest = new bongiovi.GLTexture(images.test);
};

p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis();
	this._vDotPlane = new bongiovi.ViewDotPlane();

	this._vPlane = new ViewPlane();
};

p.render = function() {
	if(this.texture === undefined) {
		if(images.hdr !== undefined) {
			this.texture = new bongiovi.GLTexture(images.hdr);
		} else {
			return;	
		}	
	}

	this._vAxis.render();
	this._vDotPlane.render();

	// this._vPlane.render(this.textureTest);
	this._vPlane.render(this.texture);
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;