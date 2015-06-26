// ViewPlane.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

function ViewPlane() {
	this.time = Math.random() * 0xFF;
	bongiovi.View.call(this, glslify("../shaders/matrix.vert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._init = function() {
	gl = GL.gl;
	this.mesh = bongiovi.MeshUtils.createPlane(100, 100, 1);
	// this.mesh = bongiovi.MeshUtils.createSphere(100, 24);

};

p.render = function() {
	this.shader.bind();
	this.time += .01;
	this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	this.shader.uniform("opacity", "uniform1f", 1);
	this.shader.uniform("time", "uniform1f", this.time);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;