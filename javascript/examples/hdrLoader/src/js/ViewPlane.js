// ViewPlane.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

function ViewPlane() {
	bongiovi.View.call(this, null, glslify('../shaders/hdr.frag'));
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._init = function() {
	gl = GL.gl;
	// this.mesh = bongiovi.MeshUtils.createPlane(200, 100, 1);
	this.mesh = bongiovi.MeshUtils.createSphere(150, 36);
};

p.render = function(texture) {
	this.shader.bind();
	this.shader.uniform("texture", "uniform1i", 0);
	texture.bind(0);
	this.shader.uniform("exposure", "uniform1f", params.exposure);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;