// ViewParticles.js

(function() {

	var GL = bongiovi.GL;
	var random = function(min, max) { return min + Math.random() * (max - min);	}

	ViewParticles = function() {
		bongiovi.View.call(this, "assets/shaders/dot.vert", "assets/shaders/dot.frag");
	}

	var p = ViewParticles.prototype = new bongiovi.View();
	var s = bongiovi.View.prototype;

	p._init = function() {
		var positions = [];
		var coords = [];
		var indices = [];
		var range = 200;

		for(var i=0; i<1000; i++) {
			var x = random(-range, range);
			var y = random(-range, range);
			var z = random(-range, range);
			positions.push([x, y, z]);
			coords.push([0, 0]);
			indices.push(i);
		}

		this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.POINTS);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoords(coords);
		this.mesh.bufferIndices(indices);
	};

	p.render = function() {
		this.shader.bind();
		GL.draw(this.mesh);
	};
})();