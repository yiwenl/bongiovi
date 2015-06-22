// ViewDots.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

var random = function(min, max) { return min + Math.random() * (max - min);	}

function ViewDots() {
	this.count = Math.random() * 0xFF;
	bongiovi.View.call(this, glslify("../shaders/colorDots.vert"), glslify("../shaders/colorDots.frag"));
}

var p = ViewDots.prototype = new bongiovi.View();
p.constructor = ViewDots;


p._init = function() {
	gl = GL.gl;
	var positions = [];
	var coords = [];
	var indices = []; 
	var colors = [];
	var extra = [];

	var range = 120;
	var i=0;
	while(i++ < 65535) {
		positions.push([random(-range, range), random(-range, range), random(-range, range)]);
		colors.push([Math.random(), Math.random(), Math.random()]);
		coords.push([0, 0]);
		indices.push(i-1);
		extra.push([random(2, 5), random(10, 20)]);
	}

	console.log('Colors.length', colors.length);

	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.POINTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(colors, "aColor", 3);
	// this.mesh.bufferData(extra, "aExtra", 2);
};

p.render = function() {
	this.shader.bind();
	this.count += .1;
	this.shader.uniform("time", "uniform1f", this.count);
	GL.draw(this.mesh);
};

module.exports = ViewDots;