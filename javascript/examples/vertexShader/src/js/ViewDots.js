// ViewDots.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

var random = function(min, max) { return min + Math.random() * (max - min);	}

function ViewDots() {
	// bongiovi.View.call(this, null, bongiovi.ShaderLibs.get("simpleColorFrag"));
	bongiovi.View.call(this, glslify("../shaders/video.vert"), glslify("../shaders/video.frag"));
}

var p = ViewDots.prototype = new bongiovi.View();
p.constructor = ViewDots;


p._init = function() {
	gl            = GL.gl;
	var positions = [];
	var coords    = [];
	var indices   = []; 
	var num       = 512;
	var size      = num * 2;
	var sx        = -size * .5;
	var index     = 0;

	function getPos(i, j) {
		x = sx + i/num * size;
		z = sx + j/num * size;
		return [x, 0, z*.5];
	}


	for(var j=0; j<num; j++) {
		for(var i=0; i<num; i++) {
			positions.push(getPos(i, j));
			coords.push([i/num, j/num]);
			indices.push(index);
			index++;
		}
	}


	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.POINTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function(texture) {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("texture", "uniform1i", 0);
	this.shader.uniform("opacity", "uniform1f", 1);
	texture.bind(0);
	GL.draw(this.mesh);
};

module.exports = ViewDots;