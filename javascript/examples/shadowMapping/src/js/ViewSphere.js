// ViewSphere.js

var GL = bongiovi.GL;
var gl;

function ViewSphere(size, color) {
	this.position = [0, 0, 0];
	this.scale    = [1, 1, 1];
	this._size    = size || 10;
	this.color 	  = color || [1, 1, 1];
	bongiovi.View.call(this, bongiovi.ShaderLibs.get("generalVert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewSphere.prototype = new bongiovi.View();
p.constructor = ViewSphere;


p._init = function() {
	gl = GL.gl;

	this.mesh = bongiovi.MeshUtils.createSphere(this._size, 24);
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("position", "uniform3fv", this.position);
	this.shader.uniform("scale", "uniform3fv", this.scale);
	this.shader.uniform("color", "uniform3fv", this.color);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewSphere;