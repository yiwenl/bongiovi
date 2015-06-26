(function() {

	var Mesh = function(aVertexSize, aIndexSize, aDrawType) {

		this.gl = bongiovi.GLTool.gl;
		this.vertexSize = aVertexSize;
		this.indexSize = aIndexSize;
		this.drawType = aDrawType;
		this.extraAttributes = [];
		
		this.vBufferPos = undefined;
		this._floatArrayVertex = undefined;

		this._init();
	};

	var p = Mesh.prototype;

	p._init = function() {

	};

	p.bufferVertex = function(aArrayVertices, isDynamic) {
		var vertices = [];
		var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW
		this._vertices = [];

		for(var i=0; i<aArrayVertices.length; i++) {
			for(var j=0; j<aArrayVertices[i].length; j++) vertices.push(aArrayVertices[i][j]);

			this._vertices.push(vec3.clone(aArrayVertices[i]));
		}

		if(this.vBufferPos == undefined) this.vBufferPos = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferPos);

		if(this._floatArrayVertex == undefined) {
			this._floatArrayVertex = new Float32Array(vertices);
		} else {
			if(aArrayVertices.length != this._floatArrayVertex.length) {
				this._floatArrayVertex = new Float32Array(vertices);
			} else {
				for(var i=0; i<aArrayVertices.length; i++) {
					this._floatArrayVertex[i] = aArrayVertices[i];
				}
			}
		}

		this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, drawType);
		this.vBufferPos.itemSize = 3;
	};

	p.bufferTexCoords = function(aArrayTexCoords) {
		var coords = [];

		for(var i=0; i<aArrayTexCoords.length; i++) {
			for(var j=0; j<aArrayTexCoords[i].length; j++) coords.push(aArrayTexCoords[i][j]);
		}

		this.vBufferUV = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferUV);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(coords), this.gl.STATIC_DRAW);
		this.vBufferUV.itemSize = 2;
	};

	p.bufferData = function(aData, aName, aItemSize, isDynamic) {
		var index = -1;
		var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW

		for(var i=0; i<this.extraAttributes.length; i++) {
			if(this.extraAttributes[i].name == aName) {
				this.extraAttributes[i].data = aData;
				index = i;
				break;
			}
		}

		var bufferData = [];
		for(var i=0; i<aData.length; i++) {
			for(var j=0; j<aData[i].length; j++) bufferData.push(aData[i][j]);
		}

		if(index == -1) {
			var buffer = this.gl.createBuffer();
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
			var floatArray = new Float32Array(bufferData);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
			this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
		} else {
			var buffer = this.extraAttributes[index].buffer;
			// console.debug("Buffer exist", buffer);
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
			var floatArray = this.extraAttributes[index].floatArray;
			for(var i=0; i<bufferData.length; i++) {
				floatArray[i] = bufferData[i];
			}
			this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
		}

	};

	p.bufferIndices = function(aArrayIndices) {
		this._indices = aArrayIndices;
		this.iBuffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), this.gl.STATIC_DRAW);
		this.iBuffer.itemSize = 1;
		this.iBuffer.numItems = aArrayIndices.length;
	};


	p.computeNormals = function() {
		if(this.drawType != this.gl.TRIANGLES) return;

		if(this._faces === undefined) {	this._generateFaces();	}
		console.log("Start computing");

		var time = new Date().getTime();

		this._normals = [];
		for(var i=0; i<this._vertices.length; i++) {
			var normal = vec3.create();
			var faceCount = 0;
			for(j=0; j<this._faces.length; j++) {
				if(this._faces[j].contains(this._vertices[i])) {
					vec3.add(normal, normal, this._faces[j].faceNormal);
					faceCount ++;
				}
			}

			vec3.normalize(normal, normal);
			this._normals.push(normal);
		}

		this.bufferData(this._normals, "aNormal", 3);

		var totalTime = new Date().getTime() - time;
		console.log("Total Time : ", totalTime);
	};


	p.computeTangent = function() {
		
	};


	p._generateFaces = function() {
		this._faces = [];

		for(var i=0; i<this._indices.length; i+=3) {
			var p0 = this._vertices[this._indices[i+0]];
			var p1 = this._vertices[this._indices[i+1]];
			var p2 = this._vertices[this._indices[i+2]];

			this._faces.push(new bongiovi.Face(p0, p1, p2));
		}
	};

	bongiovi.Mesh = Mesh;

})();