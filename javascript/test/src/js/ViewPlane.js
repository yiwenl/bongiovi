// ViewPlane.js

// var GL = require("./GLTools");
// var bongiovi = require("./libs/bongiovi");
var GL, gl;

function ViewPlane() {
	GL = bongiovi.GL;
	bongiovi.View.call(this, null, bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._init = function() {
	gl = GL.gl;
	// var positions = [];
	// var coords = [];
	// var indices = []; 

	// this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	// this.mesh.bufferVertex(positions);
	// this.mesh.bufferTexCoords(coords);
	// this.mesh.bufferIndices(indices);

	this.mesh = bongiovi.MeshUtils.createPlane(100, 100, 1);
};

p.render = function(texture) {
	if(!this.shader.isReady() ) return;

	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, .5, 0]);
	this.shader.uniform("opacity", "uniform1f", 1);
	// this.shader.uniform("texture", "uniform1i", 0);
	// texture.bind(0);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;