// ViewMountain.js

(function() {
	var GL = bongiovi.GL;

	ViewMountain = function() {
		bongiovi.View.call(this, "assets/shaders/copyNormal.vert", "assets/shaders/normal.frag");
	}

	var p = ViewMountain.prototype = new bongiovi.View();

	p._init = function() {
		var positions = [];
		var coords = [];
		var indices = [];
		var numSeg = 20;
		var size = 200;
		var height = 100;
		var index = 0;

		function getPos(i, j) {
			var px, pz;
			var p = [];
			px = i/numSeg;
			pz = j/numSeg;
			p[0] = -size*.5 + size * px;
			p[2] = -size*.5 + size * pz;
			p[1] = Math.sin(px * Math.PI) * Math.sin(pz * Math.PI) * height;

			return p;
		}

		for(var i=0; i<numSeg; i++) {
			for(var j=0; j<numSeg; j++) {
				positions.push(getPos(i, j+1));
				positions.push(getPos(i+1, j+1));
				positions.push(getPos(i+1, j));
				positions.push(getPos(i, j));

				coords.push([0, 0]);
				coords.push([1, 0]);
				coords.push([1, 1]);
				coords.push([0, 1]);

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
		this.mesh.computeNormals();
	};

	p.render = function() {
		this.shader.bind();
		GL.draw(this.mesh);
	};
})();