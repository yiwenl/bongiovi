// ViewPlane.js


var GL = bongiovi.GL;
var gl;

function ViewPlane() {
	bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalVert'), bongiovi.ShaderLibs.get('simpleColorFrag'));
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._init = function() {
	gl = GL.gl;
	this.mesh = bongiovi.MeshUtils.createPlane(100, 100, 1, "yz");
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	this.shader.uniform("position", "uniform3fv", [-50, -50, 0]);
	this.shader.uniform("scale", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;