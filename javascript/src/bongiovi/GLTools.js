// GLTools.js
"use strict";

var glm = require("gl-matrix");

function GLTools() {
	this.aspectRatio   = 1;
	this.fieldOfView   = 45;
	this.zNear         = 5;
	this.zFar          = 3000;

	this.canvas        = null;
	this.gl            = null;

	this.shader        = null;
	this.shaderProgram = null;
}

var p = GLTools.prototype;

p.init = function(mCanvas, mWidth, mHeight, parameters) {
	if(this.canvas === null) {
		this.canvas      = mCanvas || document.createElement("canvas");
	}
	var params       = parameters || {};
	params.antialias = true;

	this.gl          = this.canvas.getContext("webgl", params) || this.canvas.getContext("experimental-webgl", params);
	console.log('GL TOOLS : ', this.gl);
	
	
	if(mWidth !== undefined && mHeight !== undefined) {
		this.setSize(mWidth, mHeight);
	} else {
		this.setSize(window.innerWidth, window.innerHeight);	
	}

	this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.enable(this.gl.BLEND);
	this.gl.clearColor( 0, 0, 0, 1 );
	this.gl.clearDepth( 1 );

	this.matrix                 = glm.mat4.create();
	glm.mat4.identity(this.matrix);
	this.normalMatrix           = glm.mat3.create();
	this.depthTextureExt        = this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
	this.floatTextureExt        = this.gl.getExtension("OES_texture_float"); // Or browser-appropriate prefix
	this.floatTextureLinearExt  = this.gl.getExtension("OES_texture_float_linear"); // Or browser-appropriate prefix
	this.standardDerivativesExt = this.gl.getExtension("OES_standard_derivatives"); // Or browser-appropriate prefix

	this.enabledVertexAttribute = [];
	this.enableAlphaBlending();
	this._viewport = [0, 0, this.width, this.height];
};


p.getGL = function() {	return this.gl;	};

p.setShader = function(aShader) {
	this.shader = aShader;
};

p.setShaderProgram = function(aShaderProgram) {
	this.shaderProgram = aShaderProgram;
};

p.setViewport = function(aX, aY, aW, aH) {
	var hasChanged = false;
	if(aX!==this._viewport[0]) {hasChanged = true;}
	if(aY!==this._viewport[1]) {hasChanged = true;}
	if(aW!==this._viewport[2]) {hasChanged = true;}
	if(aH!==this._viewport[3]) {hasChanged = true;}

	if(hasChanged) {
		this.gl.viewport(aX, aY, aW, aH);
		this._viewport = [aX, aY, aW, aH];
	}
};

p.setMatrices = function(aCamera) {
	this.camera = aCamera;	
};

p.rotate = function(aRotation) {
	glm.mat4.copy(this.matrix, aRotation);

	glm.mat4.multiply(this.matrix, this.camera.getMatrix(), this.matrix);
	glm.mat3.fromMat4(this.normalMatrix, this.matrix);
	glm.mat3.invert(this.normalMatrix, this.normalMatrix);
	glm.mat3.transpose(this.normalMatrix, this.normalMatrix);
};


//	BLEND MODES
p.enableAlphaBlending = function() {
	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);	
};

p.enableAdditiveBlending = function() {
	this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
};

//	CLEAR CANVAS
p.clear = function(r, g, b, a) {
	this.gl.clearColor( r, g, b, a );
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
};

//	DRAWING ELEMENTS
p.draw = function(aMesh) {
	if(!this.shaderProgram) {
		console.warn("Shader program not ready yet");
		return;
	}

	if(!this.shaderProgram.pMatrixValue) {
		this.shaderProgram.pMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
		glm.mat4.copy(this.shaderProgram.pMatrixValue, this.camera.projection || this.camera.getMatrix());
	} else {
		var pMatrix = this.camera.projection || this.camera.getMatrix();
		if(glm.mat4.str(this.shaderProgram.pMatrixValue) !== glm.mat4.str(pMatrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
			glm.mat4.copy(this.shaderProgram.pMatrixValue, pMatrix);
		}
	}

	if(!this.shaderProgram.mvMatrixValue) {
		this.shaderProgram.mvMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
		glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
	} else {
		if(glm.mat4.str(this.shaderProgram.mvMatrixValue) !== glm.mat4.str(this.matrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
			glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
		}
	}

	if(!this.shaderProgram.normalMatrixValue) {
		this.shaderProgram.normalMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix3fv(this.shaderProgram.normalMatrixUniform, false, this.normalMatrix );
		glm.mat3.copy(this.shaderProgram.normalMatrixValue, this.normalMatrix);
	} else {
		if(glm.mat3.str(this.shaderProgram.normalMatrixValue) !== glm.mat3.str(this.normalMatrix)) {
			this.gl.uniformMatrix3fv(this.shaderProgram.normalMatrixUniform, false, this.normalMatrix );
			glm.mat3.copy(this.shaderProgram.normalMatrixValue, this.normalMatrix);
		}
	}



	// 	VERTEX POSITIONS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferPos);
	var vertexPositionAttribute = getAttribLoc(this.gl, this.shaderProgram, "aVertexPosition");
	this.gl.vertexAttribPointer(vertexPositionAttribute, aMesh.vBufferPos.itemSize, this.gl.FLOAT, false, 0, 0);
	if(this.enabledVertexAttribute.indexOf(vertexPositionAttribute) === -1) {
		this.gl.enableVertexAttribArray(vertexPositionAttribute);	
		this.enabledVertexAttribute.push(vertexPositionAttribute);
	}
	

	//	TEXTURE COORDS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferUV);
	var textureCoordAttribute = getAttribLoc(this.gl, this.shaderProgram, "aTextureCoord");
	this.gl.vertexAttribPointer(textureCoordAttribute, aMesh.vBufferUV.itemSize, this.gl.FLOAT, false, 0, 0);
	
	if(this.enabledVertexAttribute.indexOf(textureCoordAttribute) === -1) {
		this.gl.enableVertexAttribArray(textureCoordAttribute);
		this.enabledVertexAttribute.push(textureCoordAttribute);
	}

	//	INDICES
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, aMesh.iBuffer);

	//	EXTRA ATTRIBUTES
	for(var i=0; i<aMesh.extraAttributes.length; i++) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.extraAttributes[i].buffer);
		var attrPosition = getAttribLoc(this.gl, this.shaderProgram, aMesh.extraAttributes[i].name);
		this.gl.vertexAttribPointer(attrPosition, aMesh.extraAttributes[i].itemSize, this.gl.FLOAT, false, 0, 0);
		// this.gl.enableVertexAttribArray(attrPosition);	
		if(this.enabledVertexAttribute.indexOf(attrPosition) === -1) {
			this.gl.enableVertexAttribArray(attrPosition);
			this.enabledVertexAttribute.push(attrPosition);
		}	
	}

	//	DRAWING
	if(aMesh.drawType === this.gl.POINTS ) {
		this.gl.drawArrays(aMesh.drawType, 0, aMesh.vertexSize);	
	} else {
		this.gl.drawElements(aMesh.drawType, aMesh.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);	
	}


	function getAttribLoc(gl, shaderProgram, name) {
		if(shaderProgram.cacheAttribLoc === undefined) {	shaderProgram.cacheAttribLoc = {};	}
		if(shaderProgram.cacheAttribLoc[name] === undefined) {
			shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(shaderProgram, name);
		}

		return shaderProgram.cacheAttribLoc[name];
	}

};

//	CANVAS RESIZING
p.setSize = function(mWidth, mHeight) {
	this._width = mWidth;
	this._height = mHeight;

	this.canvas.width      = this._width;
	this.canvas.height     = this._height;
	this.gl.viewportWidth  = this._width;
	this.gl.viewportHeight = this._height;

	this.gl.viewport(0, 0, this._width, this._height);
	this.aspectRatio       = this._width / this._height;
};


p.__defineGetter__("width", function() {
	return this._width;
});

p.__defineGetter__("height", function() {
	return this._height;
});

p.__defineGetter__("viewport", function() {
	return this._viewport;
});

var instance = null;

GLTools.getInstance = function() {
	if(instance === null) {
		instance = new GLTools();
	}
	return instance;
};


module.exports = GLTools.getInstance();