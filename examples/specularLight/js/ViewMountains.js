// ViewMountains.js

(function() {
	var GL = bongiovi.GL;

	var random = function(min, max) { return min + Math.random() * (max - min);	}

	ViewMountains = function() {
		this.lightDirection = [0, 0, 1];
		this.lightRadius = 200;
		var ambient = .1;
		this.ambientColor = [ambient, ambient, ambient*1.05];
		this.specularLightColor = [1, 1, .9];
		this.count = 0;
		this.shininess = 10.0;
		this._cameraPos = vec3.create();

		bongiovi.View.call(this, "../../assets/shaders/specularLight.vert", "../../assets/shaders/specularLight.frag");
	}

	var p = ViewMountains.prototype = new bongiovi.View();


	p._init = function() {
		var positions = [];
		var coords = [];
		var indices = [];
		var size = 200;
		var height = 150;
		var numSeg = 20;
		var index = 0;

		function getPosition(i, j) {
			var px = i/numSeg;
			var pz = j/numSeg;
			var offset = Math.sin(px * Math.PI) * Math.sin(pz * Math.PI);
			var p = [];
			p[0] = -size * .5 + px * size;
			p[1] = offset * height - height*.5;
			p[2] = -size * .5 + pz * size;

			return p;
		}


		for(var i=0; i<numSeg; i++) {
			for(var j=0; j<numSeg; j++) {
				positions.push(getPosition(i, j+1));
				positions.push(getPosition(i+1, j+1));
				positions.push(getPosition(i+1, j));
				positions.push(getPosition(i, j));

				coords.push([0, 0]);
				coords.push([0, 0]);
				coords.push([0, 0]);
				coords.push([0, 0]);

				indices.push(index*4+0);
				indices.push(index*4+1);
				indices.push(index*4+2);
				indices.push(index*4+0);
				indices.push(index*4+2);
				indices.push(index*4+3);
				index ++;
			}
		}

		this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoords(coords);
		this.mesh.bufferIndices(indices);

		// this.mesh = bongiovi.MeshUtils.createSphere(80, 24);
		this.mesh.computeNormals();
	};


	p.render = function(mLightPosition, mLightColor, mCameraPosition) {
		this.count += .1;
		this.shininess = 8 + Math.sin(this.count) * 6.0;
		// this.lightRadius = 200 + Math.sin(this.count) * 100;
		vec3.normalize(this._cameraPos, mCameraPosition);

		this.lightDirection = mLightPosition || this.lightDirection;
		this.shader.bind();
		this.shader.uniform("lightDirection", "uniform3fv", mLightPosition);
		this.shader.uniform("lightColor", "uniform3fv", mLightColor);
		this.shader.uniform("ambientColor", "uniform3fv", this.ambientColor);
		this.shader.uniform("specularLightColor", "uniform3fv", this.specularLightColor);
		this.shader.uniform("lightRadius", "uniform1f", this.lightRadius);
		this.shader.uniform("viewPosition", "uniform3fv", this._cameraPos);
		this.shader.uniform("shininess", "uniform1f", this.shininess);
		GL.draw(this.mesh);
	};

})();