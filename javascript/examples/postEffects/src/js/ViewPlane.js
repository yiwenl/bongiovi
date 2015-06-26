// ViewPlane.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

function ViewPlane() {
	this.time = Math.random() * 0xFF;
	// bongiovi.View.call(this);
	bongiovi.View.call(this, null, glslify("../shaders/post.frag"));
	// bongiovi.View.call(this, null, bongiovi.ShaderLibs.get("simpleColorFrag"));.

	new TangledShader(gl, this.shader.fragmentShader, this._onShaderUpdate.bind(this));
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._init = function() {
	gl = GL.gl;
	this.mesh = bongiovi.MeshUtils.createPlane(200, 200, 1);
	// this.mesh = bongiovi.MeshUtils.createSphere(100, 24);

};

p._onShaderUpdate = function(shader) {
	this.shader.clearUniforms();
	this.shader.attachShaderProgram();
};

p.render = function(texture) {
	this.shader.bind();
	this.shader.uniform("texture", "uniform1i", 0);
	texture.bind(0);
	// this.time += .01;
	// this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	// this.shader.uniform("opacity", "uniform1f", 1);
	// this.shader.uniform("time", "uniform1f", this.time);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;