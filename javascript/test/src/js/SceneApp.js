// SceneApp.js

var GL = bongiovi.GL;
var ViewPlane = require("./ViewPlane");
var ViewRGB = require("./ViewRgbSeparate");

function SceneApp() {
	bongiovi.Scene.call(this);
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis(1);
	this._vPlane = new ViewPlane();
	this._vDotPlane = new bongiovi.ViewDotPlane();
	this._vCopy = new bongiovi.ViewCopy();
	this._vRGB = new ViewRGB();

	this._fbo = new bongiovi.FrameBuffer(GL.width, GL.height);
	this._passGreyscale = new bongiovi.post.PassGreyscale(GL.width, GL.height);
	this._passRGB = new bongiovi.post.Pass(this._vRGB, GL.width, GL.height);
	// this._passRGB = 
};


p._initTextures = function() {
	console.log('Init Textures');
};


p.render = function() {

	this._fbo.bind();
	var grey = .11;
	GL.clear(grey, grey, grey, 1.0);

	this._vPlane.render();
	this._vAxis.render();
	this._vDotPlane.render();

	this._fbo.unbind();

	GL.clear(0, 0, 0, 0);
	GL.setMatrices(this.cameraOtho);
	GL.rotate(this.rotationFront);

	// this._passGreyscale.render(this._fbo.getTexture());
	// this._vCopy.render(this._passGreyscale.getTexture());
	this._passRGB.render(this._fbo.getTexture());
	this._vCopy.render(this._passRGB.getTexture());
};

module.exports = SceneApp;