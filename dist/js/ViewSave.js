// ViewSave.js

(function() {

	var GL = bongiovi.GL;
	var random = function(min, max) { return min + Math.random() * (max - min);	}

	ViewSave = function() {
		bongiovi.View.call(this, "assets/shaders/save.vert", "assets/shaders/save.frag")
	}

	var p = ViewSave.prototype = new bongiovi.View();
	var s = bongiovi.View.prototype;

	p._init = function() {
		var total = params.numParticles * params.numParticles;

		var positions = [];
		var coords = [];
		var indices = [];
		var tx, ty;
		var range = 150;
		var offset = 1/params.numParticles;

		for(var i=0; i<total; i++) {
			var x = random(-range, range);
			var y = random(-range, range);
			var z = random(-range, range);
			// var x = Math.random();
			// var y = Math.random();
			// var z = Math.random();

			tx = (i % params.numParticles) / params.numParticles;
			ty = Math.floor(i/params.numParticles)/params.numParticles;
			tx = (tx - .5) * 2.0 + offset;
			ty = (ty - .5) * 2.0 + offset;

			positions.push([x, y, z]);
			coords.push([tx, ty]);
			indices.push(i);
		}

		this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.POINTS);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoords(coords);
		this.mesh.bufferIndices(indices);
	};

	p.render = function() {
		if(!this.mesh) return;
		this.shader.bind();
		GL.draw(this.mesh);
	};
})();