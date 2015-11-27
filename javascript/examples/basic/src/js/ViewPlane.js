// ViewPlane.js


var GL = bongiovi.GL;
var gl;

function ViewPlane() {
	// bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalVert'), bongiovi.ShaderLibs.get('simpleColorFrag'));
	// bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalWithNormalVert'), bongiovi.ShaderLibs.get('simpleColorFrag'));
	// bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalWithNormalVert'), bongiovi.ShaderLibs.get('simpleColorLighting'));
	bongiovi.View.call(this, bongiovi.ShaderLibs.get('generalWithNormalVert'), bongiovi.ShaderLibs.get('simpleCopyLighting'));
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._init = function() {
	gl = GL.gl;
	this.mesh = bongiovi.MeshUtils.createPlane(500, 500, 1, true, "xz");
};

p.render = function(lightPosition, texture) {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	this.shader.uniform("position", "uniform3fv", [-50, -50, 0]);
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

module.exports = ViewPlane;