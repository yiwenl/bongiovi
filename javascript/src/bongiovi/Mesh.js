"use strict";

var Face = require("./Face");
var GL = require("./GLTools");
var glm = require("gl-matrix");

var Mesh = function(aVertexSize, aIndexSize, aDrawType) {

	this.gl = GL.gl;
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
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	this._vertices = [];

	for(var i=0; i<aArrayVertices.length; i++) {
		for(var j=0; j<aArrayVertices[i].length; j++) {
			vertices.push(aArrayVertices[i][j]);
		}
		this._vertices.push(glm.vec3.clone(aArrayVertices[i]));
	}

	if(this.vBufferPos === undefined) {
		this.vBufferPos = this.gl.createBuffer();
	}
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferPos);

	if(this._floatArrayVertex === undefined) {
		this._floatArrayVertex = new Float32Array(vertices);
	} else {
		if(aArrayVertices.length !== this._floatArrayVertex.length) {
			this._floatArrayVertex = new Float32Array(vertices);
		} else {
			for(var k=0; k<aArrayVertices.length; k++) {
				this._floatArrayVertex[k] = aArrayVertices[k];
			}
		}
	}

	this.vertexSize = aArrayVertices.length;
	this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, drawType);
	this.vBufferPos.itemSize = 3;
};

p.bufferTexCoords = function(aArrayTexCoords, isDynamic) {
	var coords = [];
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;

	for(var i=0; i<aArrayTexCoords.length; i++) {
		for(var j=0; j<aArrayTexCoords[i].length; j++) {
			coords.push(aArrayTexCoords[i][j]);
		}
	}

	this.vBufferUV = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferUV);
	this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(coords), drawType);
	this.vBufferUV.itemSize = 2;
};

p.bufferIndices = function(aArrayIndices, isDynamic) {
	this.indexSize = aArrayIndices.length;
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	this._indices = aArrayIndices;
	this.iBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
	this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), drawType);
	this.iBuffer.itemSize = 1;
	this.iBuffer.numItems = aArrayIndices.length;
};

p.computeNormals = function() {
	if(this.drawType !== this.gl.TRIANGLES) {return;}

	if(this._faces === undefined) {	this._generateFaces();	}
	console.log("Start computing");

	var time = new Date().getTime();
	var j=0;

	this._normals = [];
	for(var i=0; i<this._vertices.length; i++) {
		var normal = glm.vec3.create();
		var faceCount = 0;
		for(j=0; j<this._faces.length; j++) {
			if(this._faces[j].contains(this._vertices[i])) {
				glm.vec3.add(normal, normal, this._faces[j].faceNormal);
				faceCount ++;
			}
		}

		glm.vec3.normalize(normal, normal);
		this._normals.push(normal);
	}

	this.bufferData(this._normals, "aNormal", 3);

	var totalTime = new Date().getTime() - time;
	console.log("Total Time : ", totalTime);
};

p.bufferData = function(aData, aName, aItemSize, isDynamic) {
	var index = -1;
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	var i=0;

	for(i=0; i<this.extraAttributes.length; i++) {
		if(this.extraAttributes[i].name === aName) {
			this.extraAttributes[i].data = aData;
			index = i;
			break;
		}
	}

	var bufferData = [];
	for(i=0; i<aData.length; i++) {
		for(var j=0; j<aData[i].length; j++) {
			bufferData.push(aData[i][j]);
		}
	}

	var buffer, floatArray;
	if(index === -1) {
		buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = new Float32Array(bufferData);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
		this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
	} else {
		buffer = this.extraAttributes[index].buffer;
		// console.debug("Buffer exist", buffer);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = this.extraAttributes[index].floatArray;
		for(i=0; i<bufferData.length; i++) {
			floatArray[i] = bufferData[i];
		}
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
	}

};


p.computeTangent = function() {
	
};


p._generateFaces = function() {
	this._faces = [];

	for(var i=0; i<this._indices.length; i+=3) {
		var p0 = this._vertices[this._indices[i+0]];
		var p1 = this._vertices[this._indices[i+1]];
		var p2 = this._vertices[this._indices[i+2]];

		this._faces.push(new Face(p0, p1, p2));
	}
};

module.exports = Mesh;