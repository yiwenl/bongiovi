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
		this.shininess = 32.0;
		this._cameraPos = vec3.create();

		bongiovi.View.call(this, "../../assets/shaders/envMapping.vert", "../../assets/shaders/envMapping.frag");
	}

	var p = ViewMountains.prototype = new bongiovi.View();


	p._init = function() {
		var positions = [];
		var coords = [];
		var indices = [];
		var size = 200;
		var height = 150;
		var numSeg = 24;
		var index = 0;
		var ringSize = 25;


		function getPositionWithTR(theta, radius) {
			var p = [];
			var rOffset = (radius - 100) / ringSize;

			p[0] = Math.cos(theta) * radius;
			p[1] = Math.sin(rOffset * Math.PI) * ringSize * .5;
			p[2] = Math.sin(theta) * radius;			

			return p;
		}

		function getPosition(i, j) {
			var theta = i/numSeg/5 * Math.PI * 2.0;
			var rOffset = j/numSeg;
			var radius = 100 + ringSize * rOffset;
			
			return getPositionWithTR(theta, radius);
		}

		var m = mat4.create();
		var axis = vec3.create();
		var yAxis = vec3.fromValues(0, 1, 0);

		function getBetterPosition(i, j) {
			var theta = i/numSeg/5 * Math.PI * 2.0;
			// var alpha = j/numSeg * Math.PI - Math.PI*.5;
			var alpha = j/numSeg * Math.PI*2.0;
			var rCenter = 100 + ringSize * .5;
			var pCenter = vec3.clone(getPositionWithTR(theta, rCenter));
			var p = vec3.clone(getPositionWithTR(theta, 100));
			var v = vec3.create();
			vec3.sub(v, pCenter, p);
			vec3.cross(axis, v, yAxis);
			vec3.normalize(axis, axis);
			mat4.identity(m);
			mat4.rotate(m, m, alpha, axis);
			vec3.transformMat4(v, v, m);
			vec3.add(v, v, pCenter);
			return v;
		}


		for(var i=0; i<numSeg*5; i++) {
			for(var j=0; j<numSeg; j++) {
				// console.log( getBetterPosition(i, j) );

				positions.push(getBetterPosition(i, j+1));
				positions.push(getBetterPosition(i+1, j+1));
				positions.push(getBetterPosition(i+1, j));
				positions.push(getBetterPosition(i, j));

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

		// this.mesh = bongiovi.MeshUtils.createSphere(80, 24*2);
		this.mesh.computeNormals();
	};


	p.render = function(texture, mTextureLight, mCameraPosition) {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		this.shader.uniform("textureLight", "uniform1i", 1);
		this.shader.uniform("viewPosition", "uniform3fv", mCameraPosition);
		this.shader.uniform("normalMatrix", "uniformMatrix3fv", GL.normalMatrix);
		
		texture.bind(0);
		mTextureLight.bind(1);
		GL.draw(this.mesh);
	};

})();