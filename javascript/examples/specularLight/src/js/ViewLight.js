// ViewLight.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

function ViewLight() {
	bongiovi.View.call(this, bongiovi.ShaderLibs.get("generalVert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewLight.prototype = new bongiovi.View();
p.constructor = ViewLight;


p._init = function() {
	this.mesh = bongiovi.MeshUtils.createSphere(10, 12);
};

p.render = function(pos) {
	this.shader.bind();
	this.shader.uniform("position", "uniform3fv", pos);
	this.shader.uniform("scale", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewLight;