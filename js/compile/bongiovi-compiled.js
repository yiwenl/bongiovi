(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// app.js

console.log("Library bongiovi V1.0.0");

//	UTILS
var Scheduler         = require("../../js/bongiovi/Scheduler.js");
var SimpleImageLoader = require("../../js/bongiovi/SimpleImageLoader.js");

//	3D
var SimpleImageLoader = require("../../js/bongiovi/GLTool.js");
var SceneRotation     = require("../../js/bongiovi/SceneRotation.js");
var Scene             = require("../../js/bongiovi/Scene.js");
var Camera            = require("../../js/bongiovi/Camera.js");
var CameraPerspective = require("../../js/bongiovi/CameraPerspective.js");
var Mesh              = require("../../js/bongiovi/Mesh.js");
var GLShader          = require("../../js/bongiovi/GLShader.js");
var GLTexture         = require("../../js/bongiovi/GLTexture.js");
var View              = require("../../js/bongiovi/View.js");
var ViewCopy          = require("../../js/bongiovi/ViewCopy.js");
var FrameBuffer       = require("../../js/bongiovi/FrameBuffer.js");
var Pass              = require("../../js/bongiovi/Pass.js");
var EffectComposer    = require("../../js/bongiovi/EffectComposer.js");

},{"../../js/bongiovi/Camera.js":2,"../../js/bongiovi/CameraPerspective.js":3,"../../js/bongiovi/EffectComposer.js":4,"../../js/bongiovi/FrameBuffer.js":5,"../../js/bongiovi/GLShader.js":6,"../../js/bongiovi/GLTexture.js":7,"../../js/bongiovi/GLTool.js":8,"../../js/bongiovi/Mesh.js":9,"../../js/bongiovi/Pass.js":10,"../../js/bongiovi/Scene.js":11,"../../js/bongiovi/SceneRotation.js":12,"../../js/bongiovi/Scheduler.js":13,"../../js/bongiovi/SimpleImageLoader.js":14,"../../js/bongiovi/View.js":15,"../../js/bongiovi/ViewCopy.js":16}],2:[function(require,module,exports){
bongiovi = window.bongiovi || {};

(function() {

	var Camera = function() {
		this.matrix = mat4.create();
		mat4.identity(this.matrix);
	};

	var p = Camera.prototype;

	p.lookAt = function(aEye, aCenter, aUp) {
		mat4.identity(this.matrix);
		mat4.lookAt(this.matrix, aEye, aCenter, aUp);
	};

	p.getMatrix = function() {
		return this.matrix;
	};

	bongiovi.Camera = Camera;
	
})();
},{}],3:[function(require,module,exports){
bongiovi = window.bongiovi || {};

(function() {

	var SuperClass = bongiovi.Camera;

	var CameraPerspective = function() {
		SuperClass.call(this);

		this.projection = mat4.create();
		mat4.identity(this.projection);
		this.mtxFinal = mat4.create();
	};

	var p = CameraPerspective.prototype = new SuperClass();
	var s = SuperClass.prototype;

	p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
		mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
	};

	p.getMatrix = function() {
		mat4.multiply(this.mtxFinal, this.projection, this.matrix);
		return this.mtxFinal;
	};

	bongiovi.CameraPerspective = CameraPerspective;

})();
},{}],4:[function(require,module,exports){
// EffectComposer.js

// define(["alfrid/Pass"], function(Pass) {
(function(Pass) {
	var EffectComposer = function() {
		this.texture;
		this._passes = [];
	}

	var p = EffectComposer.prototype = new bongiovi.Pass();
	var s = bongiovi.Pass.prototype;

	p.addPass = function(pass) {
		this._passes.push(pass);
	};

	p.render = function(texture) {
		this.texture = texture;
		for(var i=0; i<this._passes.length; i++) {
			this.texture = this._passes[i].render(this.texture);
		}

		return this.texture;
	};

	p.getTexture = function() {
		return this.texture;	
	};

	bongiovi.EffectComposer = EffectComposer;
	
})();
},{}],5:[function(require,module,exports){
// FrameBuffer.js

// define(["alfrid/GLTool", "alfrid/GLTexture"], function(GLTool, GLTexture) {
(function() {
	var gl;
	var GLTexture = bongiovi.GLTexture;
	var isPowerOfTwo = function(x) {	return !(x == 0) && !(x & (x - 1));	}

	var FrameBuffer = function(width, height, options) {
		gl = bongiovi.GLTool.gl;
		options        = options || {};
		this.width     = width;
		this.height    = height;
		this.magFilter = options.magFilter || gl.LINEAR;
		this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
		this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
		this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;

		if(!isPowerOfTwo(width) || !isPowerOfTwo(height)) {
			this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
			if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST) this.minFilter = gl.LINEAR;
		} 

		this._init();
	}

	var p = FrameBuffer.prototype;

	p._init = function() {
		this.depthTextureExt 	= gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix

		this.texture            = gl.createTexture();
		this.depthTexture       = gl.createTexture();
		this.glTexture			= new GLTexture(this.texture, true);
		this.glDepthTexture		= new GLTexture(this.depthTexture, true);
		this.frameBuffer        = gl.createFramebuffer();		
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
		this.frameBuffer.width  = this.width;
		this.frameBuffer.height = this.height;
		var size                = this.width;

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		if(this.magFilter == gl.NEAREST && this.minFilter == gl.NEAREST) 
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
		else
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

		if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST)	gl.generateMipmap(gl.TEXTURE_2D);

		gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		if(this.depthTextureExt != null)gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

	    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	    if(this.depthTextureExt == null) {
	    	console.log( "no depth texture" );
	    	var renderbuffer = gl.createRenderbuffer();
	    	gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
	    	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.frameBuffer.width, this.frameBuffer.height);
	    	gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
	    } else {
	    	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
	    }
	    
	    

	    gl.bindTexture(gl.TEXTURE_2D, null);
	    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	};


	p.bind = function() {
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
	};


	p.unbind = function() {
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	};


	p.getTexture = function() {
		return this.glTexture;
	};


	p.getDepthTexture = function() {
		return this.glDepthTexture;
	};

	bongiovi.FrameBuffer = FrameBuffer;
})();
},{}],6:[function(require,module,exports){

// define(["alfrid/GLTool"], function(GLTool) {
(function() {

	var GLShader = function(aVertexShaderId, aFragmentShaderId) {
		this.gl = bongiovi.GL.gl;
		this.idVertex = aVertexShaderId;
		this.idFragment = aFragmentShaderId;
		this.parameters = [];

		// Can't decice if I would prefer this to be a null here then set to array in the Bind function.
		// Or it's set to an array here then does not change in the bind function.
		this.uniformTextures = [];

		this.vertexShader = undefined;
		this.fragmentShader = undefined;
		this._isReady = false;
		this._loadedCount = 0;

		this.init();
	};

	var p = GLShader.prototype;

	p.init = function() {
		this.getShader(this.idVertex, true);
		this.getShader(this.idFragment, false);
	};

	p.getShader = function(aId, aIsVertexShader) {
		var req = new XMLHttpRequest();
		req.hasCompleted = false;
		var that = this;
		req.onreadystatechange = function(e) {
			// console.log(e.target.readyState);
			if(e.target.readyState == 4) {
				if(aIsVertexShader)
					that.createVertexShaderProgram(e.target.responseText);
				else
					that.createFragmentShaderProgram(e.target.responseText);
			}
		};
		req.open("GET", aId, true);
		req.send(null);
	};

	p.createVertexShaderProgram = function(aStr) {
		var shader = this.gl.createShader(this.gl.VERTEX_SHADER);

		this.gl.shaderSource(shader, aStr);
		this.gl.compileShader(shader);

		if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
			console.warn(this.gl.getShaderInfoLog(shader));
			return null;
		}

		this.vertexShader = shader;
		
		if(this.vertexShader != undefined && this.fragmentShader != undefined)
			this.attachShaderProgram();

		this._loadedCount++;
	};


	p.createFragmentShaderProgram = function(aStr) {
		var shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);

		this.gl.shaderSource(shader, aStr);
		this.gl.compileShader(shader);

		if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
			console.warn(this.gl.getShaderInfoLog(shader));
			return null;
		}

		this.fragmentShader = shader;

		if(this.vertexShader != undefined && this.fragmentShader != undefined)
			this.attachShaderProgram();

		this._loadedCount++;
	};

	p.attachShaderProgram = function() {
		this._isReady = true;
		// console.log("Create shader : ", this.idVertex, this.idFragment);
		this.shaderProgram = this.gl.createProgram();
		this.gl.attachShader(this.shaderProgram, this.vertexShader);
		this.gl.attachShader(this.shaderProgram, this.fragmentShader);
		this.gl.linkProgram(this.shaderProgram);
	};

	p.bind = function() {
		if(!this._isReady) return;
		this.gl.useProgram(this.shaderProgram);

		if(this.shaderProgram.pMatrixUniform == undefined) this.shaderProgram.pMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
		if(this.shaderProgram.mvMatrixUniform == undefined) this.shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");

		bongiovi.GLTool.setShader(this);
		bongiovi.GLTool.setShaderProgram(this.shaderProgram);

		this.uniformTextures = [];
	};

	p.isReady = function() {	return this._isReady;	};

	p.uniform = function(aName, aType, aValue) {
		if(!this._isReady) return;

		if(aType == "texture") aType = "uniform1i";

		var hasUniform = false;
		var oUniform;
		for(var i=0; i<this.parameters.length; i++) {
			oUniform = this.parameters[i];
			if(oUniform.name == aName) {
				oUniform.value = aValue;
				hasUniform = true;
				break;
			}
		}

		if(!hasUniform) {
			this.shaderProgram[aName] = this.gl.getUniformLocation(this.shaderProgram, aName);
			this.parameters.push({name : aName, type: aType, value: aValue, uniformLoc: this.shaderProgram[aName]});
		} else {
			this.shaderProgram[aName] = oUniform.uniformLoc;
		}

		if(aType.indexOf("Matrix") == -1) {
			this.gl[aType](this.shaderProgram[aName], aValue);
		} else {
			this.gl[aType](this.shaderProgram[aName], false, aValue);
		}

		if(aType == "uniform1i") {
			// Texture
			this.uniformTextures[aValue] = this.shaderProgram[aName];
		}
	};

	p.unbind = function() {

	};

	bongiovi.GLShader = GLShader;
	
})();
},{}],7:[function(require,module,exports){
// GLTexture.js

(function() {
	var gl, GL;
	var isPowerOfTwo = function(x) {	return !(x == 0) && !(x & (x - 1));	}

	var GLTexture = function(source, isTexture, options) {
		isTexture = isTexture || false;
		options = options || {};
		gl = bongiovi.GL.gl;
		GL = bongiovi.GL;
		if(isTexture) {
			this.texture = source;
		} else {
			this.texture   = gl.createTexture();
			this._isVideo  = (source.tagName == "VIDEO");
			this.magFilter = options.magFilter || gl.LINEAR;
			this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;

			this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
			this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;

			var width = source.width || source.videoWidth;
			var height = source.height || source.videoHeight;

			if(width) {
				if(!isPowerOfTwo(width) || !isPowerOfTwo(height)) {
					this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
					if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST) this.minFilter = gl.LINEAR;
					console.log(this.minFilter, gl.LINEAR_MIPMAP_NEAREST, gl.LINEAR);
				} 	
			} else {
				this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
				if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST) this.minFilter = gl.LINEAR;
			}

			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
			
			if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST)	gl.generateMipmap(gl.TEXTURE_2D);

			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}

	var p = GLTexture.prototype;


	p.updateTexture = function(source) {
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST)	gl.generateMipmap(gl.TEXTURE_2D);

		gl.bindTexture(gl.TEXTURE_2D, null);
	};


	p.bind = function(index, toDebug) {
		if(index == undefined) index = 0;

		gl.activeTexture(gl.TEXTURE0 + index);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(GL.shader.uniformTextures[index], index);
		this._bindIndex = index;
	};


	p.unbind = function() {
		gl.bindTexture(gl.TEXTURE_2D, null);
	};

	bongiovi.GLTexture = GLTexture;
})();
},{}],8:[function(require,module,exports){
bongiovi = window.bongiovi || {};

(function() {

	var instance = null;

	var GLTools = function() {
		this.aspectRatio = window.innerWidth/window.innerHeight;
		this.fieldOfView = 45;
		this.zNear = 5;
		this.zFar = 3000;

		this.canvas = null;
		this.gl = null;
		
		this.W = 0;
		this.H = 0;

		this.shader = null;
		this.shaderProgram = null;
	};

	var p = GLTools.prototype;

	p.init = function(aCanvas) {
		this.canvas = aCanvas;
		this.gl = this.canvas.getContext("experimental-webgl", {antialias:true});
		this.resize();

		var size = this.gl.getParameter(this.gl.SAMPLES);
		var antialias = this.gl.getContextAttributes().antialias;

		this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE)
		this.gl.enable(this.gl.BLEND);
		this.gl.clearColor( 0, 0, 0, 1 );
		this.gl.clearDepth( 1 );

		this.matrix = mat4.create();
		mat4.identity(this.matrix);
		this.depthTextureExt 	= this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
		this.floatTextureExt 	= this.gl.getExtension("OES_texture_float") // Or browser-appropriate prefix

		this.enableAlphaBlending();

		var that = this;
		window.addEventListener("resize", function() {
			that.resize();
		});

	};

	p.getGL = function() {	return this.gl;	};

	p.setShader = function(aShader) {
		this.shader = aShader;
	};
	p.setShaderProgram = function(aShaderProgram) {
		this.shaderProgram = aShaderProgram;
	}

	p.setViewport = function(aX, aY, aW, aH) {
		this.gl.viewport(aX, aY, aW, aH);
	};

	p.setMatrices = function(aCamera) {
		this.camera = aCamera;	
	};

	p.rotate = function(aRotation) {
		mat4.copy(this.matrix, aRotation);
	};

	p.render = function() {
		if(this.shaderProgram == null) return;
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
	};

	p.enableAlphaBlending = function() {
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);	
	};

	p.enableAdditiveBlending = function() {
		this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
	};

	p.clear = function(r, g, b, a) {
		this.gl.clearColor( r, g, b, a );
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	}

	p.draw = function(aMesh) {

		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.getMatrix() );
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );

		// 	VERTEX POSITIONS
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferPos);
		var vertexPositionAttribute = getAttribLoc(this.gl, this.shaderProgram, "aVertexPosition");
		this.gl.vertexAttribPointer(vertexPositionAttribute, aMesh.vBufferPos.itemSize, this.gl.FLOAT, false, 0, 0);
		this.gl.enableVertexAttribArray(vertexPositionAttribute);

		//	TEXTURE COORDS
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferUV);
		var textureCoordAttribute = getAttribLoc(this.gl, this.shaderProgram, "aTextureCoord");
		this.gl.vertexAttribPointer(textureCoordAttribute, aMesh.vBufferUV.itemSize, this.gl.FLOAT, false, 0, 0);
		this.gl.enableVertexAttribArray(textureCoordAttribute);

		//	INDICES
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, aMesh.iBuffer);

		//	EXTRA ATTRIBUTES
		for(var i=0; i<aMesh.extraAttributes.length; i++) {
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.extraAttributes[i].buffer);
			var attrPosition = getAttribLoc(this.gl, this.shaderProgram, aMesh.extraAttributes[i].name);
			this.gl.vertexAttribPointer(attrPosition, aMesh.extraAttributes[i].itemSize, this.gl.FLOAT, false, 0, 0);
			this.gl.enableVertexAttribArray(attrPosition);		
		}

		//	DRAWING
		if(aMesh.drawType == this.gl.POINTS ) {
			this.gl.drawArrays(aMesh.drawType, 0, aMesh.vertexSize);	
		} else {
			this.gl.drawElements(aMesh.drawType, aMesh.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);	
		}


		function getAttribLoc(gl, shaderProgram, name) {
			if(shaderProgram.cacheAttribLoc  == undefined) shaderProgram.cacheAttribLoc = {};
			if(shaderProgram.cacheAttribLoc[name] == undefined) {
				shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(shaderProgram, name);
			}

			return shaderProgram.cacheAttribLoc[name];
		}

	};

	p.resize = function() {
		this.W 	= window.innerWidth;
		this.H  = window.innerHeight;

		this.canvas.width      = this.W;
		this.canvas.height     = this.H;
		this.gl.viewportWidth  = this.W;
		this.gl.viewportHeight = this.H;
		this.gl.viewport(0, 0, this.W, this.H);
		this.aspectRatio       = window.innerWidth/window.innerHeight;

		this.render();
	};

	GLTools.getInstance = function() {
		if(instance == null) {
			instance = new GLTools();
		}
		return instance;
	};


	bongiovi.GL = GLTools.getInstance();
	bongiovi.GLTool = GLTools.getInstance();

})();

},{}],9:[function(require,module,exports){
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

	p.bufferVertex = function(aArrayVertices) {
		var vertices = [];

		for(var i=0; i<aArrayVertices.length; i++) {
			for(var j=0; j<aArrayVertices[i].length; j++) vertices.push(aArrayVertices[i][j]);
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

		this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, this.gl.STATIC_DRAW);
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

	p.bufferData = function(aData, aName, aItemSize) {
		var index = -1;

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
			this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, this.gl.STATIC_DRAW);
			this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
		} else {
			var buffer = this.extraAttributes[index].buffer;
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
			var floatArray = this.extraAttributes[index].floatArray;
			for(var i=0; i<bufferData.length; i++) {
				floatArray[i] = bufferData[i];
			}
			this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, this.gl.STATIC_DRAW);
		}

	};

	p.bufferIndices = function(aArrayIndices) {
		this.iBuffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), this.gl.STATIC_DRAW);
		this.iBuffer.itemSize = 1;
		this.iBuffer.numItems = aArrayIndices.length;
	};

	bongiovi.Mesh = Mesh;

})();
},{}],10:[function(require,module,exports){
(function() {
	var gl, GL;

	var Pass = function(params, width, height) {
		gl = bongiovi.GL.gl;
		GL = bongiovi.GL;

		if(params == undefined) return;
		if( (typeof params) == "string") {
			this.view = new bongiovi.ViewCopy("assets/shaders/copy.vert", params);
		} else {
			this.view = params;
		}

		this.width = width == undefined ? 512 : width;
		this.height = height == undefined ? 512 : height;
		this._init();
	}

	var p = Pass.prototype;


	p._init = function() {
		this.fbo = new bongiovi.FrameBuffer(this.width, this.height);
		this.fbo.bind();
		GL.setViewport(0, 0, this.fbo.width, this.fbo.height);
		GL.clear(0, 0, 0, 0);
		this.fbo.unbind();
	};

	p.render = function(texture) {
		// console.log( "Set Viewport : ", this.fbo.width, this.fbo.height );
		GL.setViewport(0, 0, this.fbo.width, this.fbo.height);
		this.fbo.bind();
		GL.clear(0, 0, 0, 0);
		this.view.render(texture);
		this.fbo.unbind();

		return this.fbo.getTexture();
	};


	p.getTexture = function() {
		return this.fbo.getTexture();
	};

	bongiovi.Pass = Pass;
})();

},{}],11:[function(require,module,exports){
(function() {
	var Scene = function() {
		this.gl = bongiovi.GLTool.gl;

		this._init();
	};

	var p = Scene.prototype;

	p._init = function() {
		this.camera = new bongiovi.CameraPerspective();
		this.camera.setPerspective(45, window.innerWidth/window.innerHeight, 5, 3000);

		var eye            = vec3.clone([0, 0, 500]  );
		var center         = vec3.create( );
		var up             = vec3.clone( [0,-1,0] );
		this.camera.lookAt(eye, center, up);
		
		this.sceneRotation = new bongiovi.SceneRotation();
		this.rotationFront = mat4.create();
		mat4.identity(this.rotationFront);
		
		this.cameraOtho    = new bongiovi.Camera();

		// In SuperClass should call following functions.
		this._initTextures();
		this._initViews();
	};

	p._initTextures = function() {
		// console.log("Should be overwritten by SuperClass");
	};

	p._initViews = function() {
		// console.log("Should be overwritten by SuperClass");
	};

	p.loop = function() {
		this.update();
		this.render();
	};

	p.update = function() {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.sceneRotation.update();
		bongiovi.GLTool.setMatrices(this.camera );
		bongiovi.GLTool.rotate(this.sceneRotation.matrix);
	};

	p.render = function() {

	};

	bongiovi.Scene = Scene;

})();
},{}],12:[function(require,module,exports){
bongiovi = window.bongiovi || {};

(function() {

	var SceneRotation = function(aListenerTarget) {
		if(aListenerTarget == undefined) aListenerTarget = document;

		this._z             = 0;
		this._mouseZ        = 0;
		this._preZ          = 0;
		this._isRotateZ     = 0;
		this.matrix         = mat4.create();
		this.m              = mat4.create();
		this._vZaxis        = vec3.clone([0, 0, 0]);
		this._zAxis         = vec3.clone([0, 0, -1]);
		this.preMouse       = {x:0, y:0};
		this.mouse          = {x:0, y:0};
		this._isMouseDown   = false;
		this._rotation      = quat.clone([0, 0, 1, 0]);
		this.tempRotation   = quat.clone([0, 0, 0, 0]);
		this._rotateZMargin = 0;
		this.diffX          = 0;
		this.diffY          = 0;
		this._currDiffX     = 0;
		this._currDiffY     = 0;
		this._offset        = .004;
		this._easing        = .1;
		this._slerp			= -1;
		this._isLocked 		= false;

		var that = this;
		aListenerTarget.addEventListener("mousedown", function(aEvent) { that._onMouseDown(aEvent); });
		aListenerTarget.addEventListener("touchstart", function(aEvent) {	that._onMouseDown(aEvent); });
		aListenerTarget.addEventListener("mouseup", function(aEvent) { that._onMouseUp(aEvent); });
		aListenerTarget.addEventListener("touchend", function(aEvent) { that._onMouseUp(aEvent); });
		aListenerTarget.addEventListener("mousemove", function(aEvent) { that._onMouseMove(aEvent); });
		aListenerTarget.addEventListener("touchmove", function(aEvent) { that._onMouseMove(aEvent); });
		aListenerTarget.addEventListener("mousewheel", function(aEvent) {	that._onMouseWheel(aEvent); });
		aListenerTarget.addEventListener("DOMMouseScroll", function(aEvent) {	that._onMouseWheel(aEvent); });
	};

	var p = SceneRotation.prototype;

	p.lock = function(value) {
		this._isLocked = value;
	};

	p.getMousePos = function(aEvent) {
		var mouseX, mouseY;

		if(aEvent.changedTouches != undefined) {
			mouseX = aEvent.changedTouches[0].pageX;
			mouseY = aEvent.changedTouches[0].pageY;
		} else {
			mouseX = aEvent.clientX;
			mouseY = aEvent.clientY;
		}
		
		return {x:mouseX, y:mouseY};
	};

	p._onMouseDown = function(aEvent) {
		if(this._isLocked) return;
		if(this._isMouseDown) return;

		var mouse = this.getMousePos(aEvent);
		var tempRotation = quat.clone(this._rotation);
		this._updateRotation(tempRotation);
		this._rotation = tempRotation;

		this._isMouseDown = true;
		this._isRotateZ = 0;
		this.preMouse = {x:mouse.x, y:mouse.y};

		if(mouse.y < this._rotateZMargin || mouse.y > (window.innerHeight - this._rotateZMargin) ) this._isRotateZ = 1;
		else if(mouse.x < this._rotateZMargin || mouse.x > (window.innerWidth - this._rotateZMargin) ) this._isRotateZ = 2;	
		
		this._z = this._preZ;

		this._currDiffX = this.diffX = 0;
		this._currDiffY = this.diffY = 0;
	};

	p._onMouseMove = function(aEvent) {
		if(this._isLocked) return;
		this.mouse = this.getMousePos(aEvent);
	};

	p._onMouseUp = function(aEvent) {
		if(this._isLocked) return;
		if(!this._isMouseDown) return;
		this._isMouseDown = false;
	};

	p._onMouseWheel = function(aEvent) {
		if(this._isLocked) return;
		aEvent.preventDefault();
		var w = aEvent.wheelDelta;
		var d = aEvent.detail;
		var value = 0;
		if (d){
			if (w) value = w/d/40*d>0?1:-1; // Opera
			else value = -d/3;              // Firefox;         TODO: do not /3 for OS X
		} else value = w/120; 

		this._preZ -= value*5;
	};

	p.setCameraPos = function(quat) {
		console.log( "Set camera pos : ", quat );

		if(this._slerp > 0) return;

		var tempRotation = quat.clone(this._rotation);
		this._updateRotation(tempRotation);
		this._rotation = quat.clone(tempRotation);
		this._currDiffX = this.diffX = 0;
		this._currDiffY = this.diffY = 0;

		this._isMouseDown = false;
		this._isRotateZ = 0;

		this._targetQuat = quat.clone(quat);
		this._slerp = 1;

	};


	p.resetQuat = function() {
		this._rotation    = quat.clone([0, 0, 1, 0]);
		this.tempRotation = quat.clone([0, 0, 0, 0]);
		this._targetQuat  = undefined;
		this._slerp       = -1;
	};

	p.update = function() {
		mat4.identity(this.m);

		if(this._targetQuat == undefined) { 
			quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]);
			this._updateRotation(this.tempRotation);
		} else {
			this._slerp += (0 - this._slerp) * .1;

			if(this._slerp < .001) {
				// quat.set(this._targetQuat, this._rotation);
				quat.set(this._rotation, this._targetQuat[0], this._targetQuat[1], this._targetQuat[2], this._targetQuat[3]);
				this._targetQuat = undefined;
				this._slerp = -1;
			} else {
				quat.set(this.tempRotation, 0, 0, 0, 0);
				quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp);
			}
		}


		// vec3.set([0, 0, this._z], this._vZaxis[0], this._vZaxis[1], this._vZaxis[2]);
		vec3.set(this._vZaxis, 0, 0, this._z);
		vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation);

		mat4.translate(this.m, this.m, this._vZaxis);
		var toTrace = Math.random() > .95;


		mat4.fromQuat(this.matrix, this.tempRotation);
		mat4.multiply(this.matrix, this.matrix, this.m);
	};

	var multiplyVec3 = function(out, quat, vec) {
		var x = vec[0], y = vec[1], z = vec[2];
		var qx = quat[0], qy = quat[1], qz = quat[2], qw = quat[3];

		// calculate quat * vec
		var ix = qw*x + qy*z - qz*y;
		var iy = qw*y + qz*x - qx*z;
		var iz = qw*z + qx*y - qy*x;
		var iw = -qx*x - qy*y - qz*z;
		
		// calculate result * inverse quat
		out[0] = ix*qw + iw*-qx + iy*-qz - iz*-qy;
		out[1] = iy*qw + iw*-qy + iz*-qx - ix*-qz;
		out[2] = iz*qw + iw*-qz + ix*-qy - iy*-qx;
		
		return out;
	};

	p._updateRotation = function(aTempRotation) {
		if(this._isMouseDown && !this._isLocked) {
			this.diffX = (this.mouse.x - this.preMouse.x) ;
			this.diffY = -(this.mouse.y - this.preMouse.y) ;

			if(this._isInvert) this.diffX = -this.diffX;
			if(this._isInvert) this.diffY = -this.diffY;
		}
		
		this._currDiffX += (this.diffX - this._currDiffX) * this._easing;
		this._currDiffY += (this.diffY - this._currDiffY) * this._easing;

		if(this._isRotateZ > 0) {
			if(this._isRotateZ == 1) {
				var angle = -this._currDiffX * this._offset; 
				angle *= (this.preMouse.y < this._rotateZMargin) ? -1 : 1;
				var _quat = quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
				quat.multiply(quat, aTempRotation, _quat);
			} else {
				var angle = -this._currDiffY * this._offset; 
				angle *= (this.preMouse.x < this._rotateZMargin) ? 1 : -1;
				var _quat = quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
				quat.multiply(quat, aTempRotation, _quat);
			}
		} else {
			var v = vec3.clone([this._currDiffX, this._currDiffY, 0]);
			var axis = vec3.create();
			vec3.cross(axis, v, this._zAxis);
			vec3.normalize(axis, axis);
			var angle = vec3.length(v) * this._offset;
			var _quat = quat.clone( [Math.sin(angle) * axis[0], Math.sin(angle) * axis[1], Math.sin(angle) * axis[2], Math.cos(angle) ] );
			quat.multiply(aTempRotation, _quat, aTempRotation);
		}
		
		this._z += (this._preZ - this._z) * this._easing;

	};

	bongiovi.SceneRotation = SceneRotation;
	
})();
},{}],13:[function(require,module,exports){
// Scheduler.js

bongiovi = window.bongiovi || {};

if(window.requestAnimFrame == undefined) {
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback ){
		window.setTimeout(callback, 1000 / 60);
		};
	})();
}

(function() {
	var Scheduler = function() {
		this.FRAMERATE = 60;
		this._delayTasks = [];
		this._nextTasks = [];
		this._deferTasks = [];
		this._highTasks = [];
		this._usurpTask = [];
		this._enterframeTasks = [];
		this._idTable = 0;

		requestAnimFrame( this._loop.bind(this) );
	}

	var p = Scheduler.prototype;

	p._loop = function() {
		requestAnimFrame( this._loop.bind(this) );
		this._process();
	}


	p._process = function() {
		for ( var i=0; i<this._enterframeTasks.length; i++) {
			var task = this._enterframeTasks[i];
			if(task != null && task != undefined) {
				task.func.apply(task.scope, task.params);
			}
		}
		
		while ( this._highTasks.length > 0) {
			var t = this._highTasks.pop();
			t.func.apply(t.scope, t.params);
		}
		

		var startTime = new Date().getTime();

		for ( var i=0; i<this._delayTasks.length; i++) {
			var t = this._delayTasks[i];
			if(startTime-t.time > t.delay) {
				t.func.apply(t.scope, t.params);
				this._delayTasks.splice(i, 1);
			}
		}

		startTime = new Date().getTime();
		var interval = 1000 / this.FRAMERATE;
		while(this._deferTasks.length > 0) {
			var task = this._deferTasks.shift();
			var current = new Date().getTime();
			if(current - startTime < interval ) {
				task.func.apply(task.scope, task.params);
			} else {
				this._deferTasks.unshift(task);
				break;
			}
		}


		startTime = new Date().getTime();
		var interval = 1000 / this.FRAMERATE;
		while(this._usurpTask.length > 0) {
			var task = this._usurpTask.shift();
			var current = new Date().getTime();
			if(current - startTime < interval ) {
				task.func.apply(task.scope, task.params);
			} else {
				// this._usurpTask.unshift(task);
				break;
			}
		}



		this._highTasks = this._highTasks.concat(this._nextTasks);
		this._nextTasks = [];
		this._usurpTask = [];
	}


	p.addEF = function(scope, func, params) {
		params = params || [];
		var id = this._idTable;
		this._enterframeTasks[id] = {scope:scope, func:func, params:params};
		this._idTable ++;
		return id;
	}


	p.removeEF = function(id) {
		if(this._enterframeTasks[id] != undefined) {
			this._enterframeTasks[id] = null
		}
		return -1;
	}


	p.delay = function(scope, func, params, delay) {
		var time = new Date().getTime();
		var t = {scope:scope, func:func, params:params, delay:delay, time:time};
		this._delayTasks.push(t);
	}


	p.defer = function(scope, func, params) {
		var t = {scope:scope, func:func, params:params};
		this._deferTasks.push(t);
	}


	p.next = function(scope, func, params) {
		var t = {scope:scope, func:func, params:params};
		this._nextTasks.push(t);
	}


	p.usurp = function(scope, func, params) {
		var t = {scope:scope, func:func, params:params};
		this._usurpTask.push(t);
	}

	bongiovi.Scheduler = new Scheduler();
	
})();



},{}],14:[function(require,module,exports){
// SimpleImageLoader.js

bongiovi = window.bongiovi || {};

(function() {
	SimpleImageLoader = function() {
		this._imgs = {};
		this._loadedCount = 0;
		this._toLoadCount = 0;
		this._scope;
		this._callback;
		this._callbackProgress;
	}

	var p = SimpleImageLoader.prototype;


	p.load = function(imgs, scope, callback, progressCallback) {
		this._imgs = {};
		this._loadedCount = 0;
		this._toLoadCount = imgs.length;
		this._scope = scope;
		this._callback = callback;
		this._callbackProgress = progressCallback;

		var that = this;

		for ( var i=0; i<imgs.length ; i++) {
			var img         = new Image();
			img.onload      = function() {	that._onImageLoaded();	}
			var path        = imgs[i];
			var tmp         = path.split("/");
			var ref         = tmp[tmp.length-1].split(".")[0];
			this._imgs[ref] = img;
			img.src         = path;
		}
	};


	p._onImageLoaded = function() {
		this._loadedCount++;

		if(this._loadedCount == this._toLoadCount) {
			this._callback.call(this._scope, this._imgs);
		} else {
			var p = this._loadedCount / this._toLoadCount;
			if(this._callbackProgress) this._callbackProgress.call(this._scope, p);
		}
	};
})();

bongiovi.SimpleImageLoader = new SimpleImageLoader();
},{}],15:[function(require,module,exports){
// define(["alfrid/GLShader"], function(GLShader) {
(function() {

	var View = function(aPathVert, aPathFrag) {
		if(aPathVert == undefined) {
			// console.warn("aPathVert is undefined");
			return;
		}
		this.shader = new bongiovi.GLShader(aPathVert, aPathFrag);
		this._init();
	};

	var p = View.prototype;

	p._init = function() {
		console.log("Should be overwritten by SuperClass");
	};

	p.render = function() {
		console.log("Should be overwritten by SuperClass");
	};

	bongiovi.View = View;
	
})();
},{}],16:[function(require,module,exports){
// define(["alfrid/View", "alfrid/GLTool", "alfrid/Mesh"], function(View, GLTool, Mesh) {
(function() {

	var SuperClass = bongiovi.View;

	var ViewCopy = function(aPathVert, aPathFrag) {
		if(aPathVert == undefined) {
			aPathVert = "assets/shaders/copy.vert";
			aPathFrag = "assets/shaders/copy.frag";
		}
		SuperClass.call(this, aPathVert, aPathFrag);
	};

	var p = ViewCopy.prototype = new SuperClass();
	var s = SuperClass.prototype;

	p._init = function() {
		var positions = [];
		var coords = [];
		var indices = [0,1,2,0,2,3];

		var size = 1;
		positions.push([-size, -size, 0]);
		positions.push([size, -size, 0]);
		positions.push([size, size, 0]);
		positions.push([-size, size, 0]);

		coords.push([0, 0]);
		coords.push([1, 0]);
		coords.push([1, 1]);
		coords.push([0, 1]);

		this.mesh = new bongiovi.Mesh(4, 6, bongiovi.GLTool.gl.TRIANGLES);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoords(coords);
		this.mesh.bufferIndices(indices);
	};

	p.render = function(aTexture) {
		// Were has the reference of this.shader come from?
		if(!this.shader.isReady())return;
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		aTexture.bind(0);
		bongiovi.GLTool.draw(this.mesh);
	};

	bongiovi.ViewCopy = ViewCopy;
	
})();
},{}]},{},[1]);
