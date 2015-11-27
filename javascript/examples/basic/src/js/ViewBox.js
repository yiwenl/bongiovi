// ViewBox.js

var GL = bongiovi.GL;
var gl;
// var glslify = require("glslify");

function ViewBox() {
	bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalWithNormalVert'), bongiovi.ShaderLibs.get('simpleColorLighting'));
}

var p = ViewBox.prototype = new bongiovi.View();
p.constructor = ViewBox;


p._init = function() {
	var size = 100;
	this.mesh = bongiovi.MeshUtils.createCube(size, size, size, true);
};

p.render = function(lightPosition, texture) {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	this.shader.uniform("position", "uniform3fv", [ 50, 0, 0]);
	this.shader.uniform("scale", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("opacity", "uniform1f", 1);

	if(texture) {
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
	}
	
	var ambient = .2;
	this.shader.uniform("ambient", "uniform3fv", [ambient, ambient, ambient]);
	this.shader.uniform("lightPosition", "uniform3fv", lightPosition);
	this.shader.uniform("lightColor", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("lightWeight", "uniform1f", 1.0 - ambient);
	GL.draw(this.mesh);
};

module.exports = ViewBox;