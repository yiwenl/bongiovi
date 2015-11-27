// ViewTree.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

function ViewTree() {
	bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalWithNormalVert'), bongiovi.ShaderLibs.get('simpleCopyLighting'));
}

var p = ViewTree.prototype = new bongiovi.View();
p.constructor = ViewTree;


p._init = function() {
	gl = GL.gl;
	this.loader = new bongiovi.ObjLoader();
	this.loader.load('assets/tree.obj', this._onObjLoaded.bind(this), null, false);
};


p._onObjLoaded = function(mesh) {
	this.mesh = mesh
};

p.render = function(lightPosition, texture) {
	if(!this.mesh) {
		return;
	}
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	this.shader.uniform("position", "uniform3fv", [0, -100, 0]);
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
module.exports = ViewTree;