// SceneApp.js

var GL = bongiovi.GL, gl;
var ViewBox = require("./ViewBox");
var ViewSphere = require("./ViewSphere");
var ViewBg = require("./ViewBg");

function SceneApp() {
	gl = GL.gl;
	bongiovi.Scene.call(this);
	this.lightPosition = [0, 0, 0];
	this.count = 0;

	this.sceneRotation.lock(true);
	this.camera.lockRotation(false);
	this.camera.radius.value = 150;

	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();

p._initTextures = function() {
	var noiseSize = 512;
	this.fboNoise = new bongiovi.FrameBuffer(noiseSize, noiseSize);

	console.log('Init Textures');
	var faces = [images.posx, images.negx, images.posy, images.negy, images.posz, images.negz];
	this.cubeTexture = new bongiovi.GLCubeTexture(faces);
};

p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis();
	this._vDotPlane = new bongiovi.ViewDotPlane();
	this._vCopy = new bongiovi.ViewCopy();

	this._vCube = new ViewBox();
	this._vSphere = new ViewSphere();
	this._vBg = new ViewBg();

	GL.setMatrices(this.cameraOrtho);
	GL.rotate(this.rotationFront);
	GL.setViewport(0, 0, 256, 256);
	gl.disable(gl.DEPTH_TEST);
	this.fboNoise.bind();
	GL.clear(0, 0, 0, 0);
	this._vBg.render();
	this.fboNoise.unbind();

	var t = this.fboNoise.getTexture();
	var faces = [t, t, t, t, t, t];
	// this.cubeTexture = new bongiovi.GLCubeTexture(faces);
};

p.render = function() {
	GL.setMatrices(this.camera);
	GL.rotate(this.sceneRotation.matrix);
	GL.setViewport(0, 0, GL.width, GL.height);
	GL.clear(0, 0, 0, 0);
	gl.enable(gl.DEPTH_TEST);
	this._vAxis.render();
	this._vDotPlane.render();

	this._vCube.render(this.cubeTexture);
	this._vSphere.render([0, 0, 0]);


	
	GL.setMatrices(this.cameraOrtho);
	GL.rotate(this.rotationFront);
	GL.setViewport(0, 0, 256, 256);
	this._vCopy.render(this.fboNoise.getTexture());
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;