// MeshUtils.js

(function() {
	bongiovi.MeshUtils = {};

	bongiovi.MeshUtils.createPlane = function(width, height, numSegments) {
		var positions = [];
		var coords = [];
		var indices = [];

		var gapX = width/numSegments;
		var gapY = height/numSegments;
		var gapUV = 1/numSegments;
		var index = 0;
		var sx = -width * .5;
		var sy = -height * .5;

		for(var i=0; i<numSegments; i++) {
			for (var j=0; j<numSegments; j++) {
				var tx = gapX * i + sx;
				var ty = gapY * j + sy;
				positions.push([tx, 		ty, 	0]);
				positions.push([tx+gapX, 	ty, 	0]);
				positions.push([tx+gapX, 	ty+gapY, 	0]);
				positions.push([tx, 		ty+gapY, 	0]);

				var u = i/numSegments;
				var v = j/numSegments;
				coords.push([u, v]);
				coords.push([u+gapUV, v]);
				coords.push([u+gapUV, v+gapUV]);
				coords.push([u, v+gapUV]);

				indices.push(index*4 + 0);
				indices.push(index*4 + 1);
				indices.push(index*4 + 2);
				indices.push(index*4 + 0);
				indices.push(index*4 + 2);
				indices.push(index*4 + 3);

				index++
			}
		}

		var mesh = new bongiovi.Mesh(positions.length, indices.length, bongiovi.GLTool.gl.TRIANGLES);
		mesh.bufferVertex(positions);
		mesh.bufferTexCoords(coords);
		mesh.bufferIndices(indices);

		return mesh;
	}

	bongiovi.MeshUtils.createSphere = function(size, numSegments) {
		
	}

	bongiovi.MeshUtils.createCube = function(size, numSegments) {
		
	}

})();