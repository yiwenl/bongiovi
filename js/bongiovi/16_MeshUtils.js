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
		var positions = [];
		var coords = [];
		var indices = [];
		var index = 0;
		var gapUV = 1/numSegments;

		var getPosition = function(i, j) {	//	rx : -90 ~ 90 , ry : 0 ~ 360
			var rx = i/numSegments * Math.PI - Math.PI * .5;
			var ry = j/numSegments * Math.PI * 2;
			var r = size;
			var pos = [];
			pos[1] = Math.sin(rx) * r;
			var t = Math.cos(rx) * r;
			pos[0] = Math.cos(ry) * t;
			pos[2] = Math.sin(ry) * t;

			return pos;
		}

		
		for(var i=0; i<numSegments; i++) {
			for(var j=0; j<numSegments; j++) {
				positions.push(getPosition(i, j));
				positions.push(getPosition(i+1, j));
				positions.push(getPosition(i+1, j+1));
				positions.push(getPosition(i, j+1));

				var u = j/numSegments;
				var v = i/numSegments;
				
				
				coords.push([1.0 - u, v]);
				coords.push([1.0 - u, v+gapUV]);
				coords.push([1.0 - u - gapUV, v+gapUV]);
				coords.push([1.0 - u - gapUV, v]);

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

	bongiovi.MeshUtils.createCube = function(size, numSegments) {
		
	}

})();