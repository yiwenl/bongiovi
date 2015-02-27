// MeshUtils.js

(function() {
	bonigovi.MeshUtils = {};

	bonigovi.MeshUtils.createPlane = function(size, numSegments) {
		var positions = [];
		var coords = [];
		var indices = [0,1,2,0,2,3];

		var size = 1;
		positions.push([-size, -size, 0]);
		positions.push([size, -size, 0]);
		positions.push([size, size, 0]);
		positions.push([-size, size, 0]);

		coords.push([0, 0]);
		coords.push([1, 0]);
		coords.push([1, 1]);
		coords.push([0, 1]);

		var mesh = new bongiovi.Mesh(positions.length, indices.length, bongiovi.GLTool.gl.TRIANGLES);
		mesh.bufferVertex(positions);
		mesh.bufferTexCoords(coords);
		mesh.bufferIndices(indices);

		return mesh;
	}

	bonigovi.MeshUtils.createSphere = function(size, numSegments) {
		
	}

	bonigovi.MeshUtils.createCube = function(size, numSegments) {
		
	}

})();