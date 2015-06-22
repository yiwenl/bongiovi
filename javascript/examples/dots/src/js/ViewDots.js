// ViewDots.js

var GL = bongiovi.GL;
var gl;

var random = function(min, max) { return min + Math.random() * (max - min);	}

function ViewDots() {
	bongiovi.View.call(this, null, bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewDots.prototype = new bongiovi.View();
p.constructor = ViewDots;


p._init = function() {
	gl = GL.gl;
	var positions = [];
	var coords = [];
	var indices = []; 

	var range = 100;
	var i=0;
	while(i++ < 65535) {
		positions.push([random(-range, range), random(-range, range), random(-range, range)]);
		coords.push([0, 0]);
		indices.push(i-1);
	}


	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.POINTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewDots;