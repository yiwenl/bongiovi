// SceneApp.js

var GL = bongiovi.GL, gl;
var ViewSphere = require("./ViewSphere");
var ViewFloor = require("./ViewFloor");
var ViewDepth = require("./ViewDepth");
var glm = bongiovi.glm;

function SceneApp() {
	gl = GL.gl;
	bongiovi.Scene.call(this);

	this.sceneRotation.lock(true);
	this.camera.lockRotation(false);

	this.cameraLight = new bongiovi.CameraPerspective();
	this.cameraLight.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
	this.cameraLight.id = 'LightingCamera';
	// this.cameraLight.lock(true);

	this.lightPos = glm.vec3.clone([0, 100, 0]);
	this.lightRadius = 200.0;
	this.count = 0;

	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();

p._initTextures = function() {
	console.log('Init Textures');

	var size = 1024;
	this.fboLight = new bongiovi.FrameBuffer(size, size);

};

p._initViews = function() {
	console.log('Init Views');
	this._vAxis     = new bongiovi.ViewAxis();
	this._vDotPlane = new bongiovi.ViewDotPlane();
	this._vSphere   = new ViewSphere(30);
	this._vLight    = new ViewSphere(5, [1, 1, .95]);
	this._vFloor    = new ViewFloor();
	this._vCopy     = new bongiovi.ViewCopy();
	this._vDepth 	= new ViewDepth();
};

p.render = function() {
	this.updateLightPosition();

	this.fboLight.bind();
	GL.clear(0, 0, 0, 0);
	GL.setViewport(0, 0, this.fboLight.width, this.fboLight.height);
	GL.setMatrices(this.cameraLight);
	GL.rotate(this.sceneRotation.matrix);
	this._vSphere.render();
	this._vFloor.render();
	this.fboLight.unbind();


	GL.setViewport(0, 0, GL.width, GL.height);
	GL.setMatrices(this.camera);
	GL.rotate(this.sceneRotation.matrix);


	this._vAxis.render();
	this._vDotPlane.render();

	this._vSphere.render();
	this._vFloor.render();
	this._vLight.render();


	GL.setViewport(0, 0, 256, 256/GL.aspectRatio);
	GL.setMatrices(this.cameraOtho);
	GL.rotate(this.rotationFront);
	gl.disable(gl.DEPTH_TEST);
	this._vDepth.render(this.fboLight.getDepthTexture());
	gl.enable(gl.DEPTH_TEST);


	this.count += .004;
};

p.updateLightPosition = function() {
	this.lightPos[0] = Math.cos(this.count) * this.lightRadius;
	this.lightPos[2] = Math.sin(this.count) * this.lightRadius;
	this._vLight.position[0] = this.lightPos[0];
	this._vLight.position[1] = this.lightPos[1];
	this._vLight.position[2] = this.lightPos[2];

	var center = glm.vec3.create();
	var up = glm.vec3.clone([0, -1, 0]);
	var eye = glm.vec3.clone(this.lightPos);
	eye[0] *= -1;
	eye[1] *= -1;
	eye[2] *= -1;
	// console.log(center, up);

	this.cameraLight.lookAt(eye, center, up);
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;