
// define(["alfrid/GLTool"], function(GLTool) {
(function() {
	var defaultVertexShader = 
		"precision highp float;"+
		"attribute vec3 aVertexPosition;"+
		"attribute vec2 aTextureCoord;"+
		""+
		"uniform mat4 uMVMatrix;"+
		"uniform mat4 uPMatrix;"+
		""+
		"varying vec2 vTextureCoord;"+
		""+
		"void main(void) {"+
		"    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);"+
		"    vTextureCoord = aTextureCoord;"+
		"}";

	var defaultFragmentShader = 
		"precision mediump float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D uSampler0;"+
		""+
		"void main(void) {"+
		"    gl_FragColor = texture2D(uSampler0, vec2(vTextureCoord.s, vTextureCoord.t));"+
		"}";


	var GLShader = function(aVertexShaderId, aFragmentShaderId) {
		this.gl = bongiovi.GL.gl;
		this.idVertex = aVertexShaderId;
		this.idFragment = aFragmentShaderId;
		this.parameters = [];

		this.uniformTextures = [];

		this.vertexShader = undefined;
		this.fragmentShader = undefined;
		this._isReady = false;
		this._loadedCount = 0;

		if(aVertexShaderId == undefined) {
			this.createVertexShaderProgram(defaultVertexShader);
		}

		if(aFragmentShaderId == undefined) {
			this.createFragmentShaderProgram(defaultFragmentShader);
		}

		this.init();
	};

	var p = GLShader.prototype;

	p.init = function() {
		if(this.idVertex && this.idVertex.indexOf("main(void)") > -1) {
			this.createVertexShaderProgram(this.idVertex);
		} else {
			this.getShader(this.idVertex, true);	
		}
		
		if(this.idFragment && this.idFragment.indexOf("main(void)") > -1) {
			this.createFragmentShaderProgram(this.idVertex);
		} else {
			this.getShader(this.idFragment, true);	
		}
	};

	p.getShader = function(aId, aIsVertexShader) {
		if(!aId) return;
		var req = new XMLHttpRequest();
		req.hasCompleted = false;
		var that = this;
		req.onreadystatechange = function(e) {
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
		if(!this.gl) return;
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
		if(!this.gl) return;
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