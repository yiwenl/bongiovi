// ViewPlane.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");

function ViewPlane() {
	gl = GL.gl;

	/*/
	bongiovi.View.call(this, glslify("../shaders/directionalLight.vert"), glslify("../shaders/directionalLight.frag"));
	new TangledShader(gl, this.shader.vertexShader, this._onShaderUpdate.bind(this));
	/*/
	bongiovi.View.call(this, glslify("../shaders/directionalLightPerFrag.vert"), glslify("../shaders/directionalLightPerFrag.frag"));
	new TangledShader(gl, this.shader.fragmentShader, this._onShaderUpdate.bind(this));
	//*/
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._onShaderUpdate = function() {
	this.shader.clearUniforms();
	this.shader.attachShaderProgram();
};


p._init = function() {
	var positions = [];
	var coords = [];
	var indices = []; 
	var normals = [];
	var index = 0;

	var size = 300;
	var sx = -size * .5;
	var y = -30;
	var num = 10;
	var uvGap = 1/num;

	function getPos(i, j) {
		var x = sx + i/num * size;
		var z = sx + j/num * size;

		return [x, y, z];
	}


	for(var j=0; j<num; j++) {
		for(var i=0; i<num; i++) {
			positions.push(getPos(i, j+1));
			positions.push(getPos(i+1, j+1));
			positions.push(getPos(i+1, j));
			positions.push(getPos(i, j));

			coords.push([i/num, j/num]);
			coords.push([i/num+uvGap, j/num]);
			coords.push([i/num+uvGap, j/num+uvGap]);
			coords.push([i/num, j/num+uvGap]);

			normals.push([0, 1, 0]);
			normals.push([0, 1, 0]);
			normals.push([0, 1, 0]);
			normals.push([0, 1, 0]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index ++;
		}
	}


	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(normals, "aNormal", 3);
};

p.render = function() {
	this.shader.bind();
	// this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	// this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;