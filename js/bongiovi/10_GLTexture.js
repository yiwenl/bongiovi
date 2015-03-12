// GLTexture.js

(function() {
	var gl, GL;
	var _isPowerOfTwo = function(x) {	return !(x == 0) && !(x & (x - 1));	}
	var isPowerOfTwo = function(obj) {	
		var w = obj.width || obj.videoWidth;
		var h = obj.height || obj.videoHeight;

		if(!w || !h) return false;

		return _isPowerOfTwo(w) && _isPowerOfTwo(h);
	}

	var GLTexture = function(source, isTexture, options) {
		isTexture = isTexture || false;
		options = options || {};
		gl = bongiovi.GL.gl;
		GL = bongiovi.GL;
		if(isTexture) {
			this.texture = source;
		} else {
			this._source   = source;
			this.texture   = gl.createTexture();
			this._isVideo  = (source.tagName == "VIDEO");
			this.magFilter = options.magFilter || gl.LINEAR;
			this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
			
			this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
			this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;
			var width      = source.width || source.videoWidth;
			var height     = source.height || source.videoHeight;

			if(width) {
				if(!isPowerOfTwo(source)) {
					this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
					if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST) this.minFilter = gl.LINEAR;
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
		if(source) this._source = source; 
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._source);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST)	gl.generateMipmap(gl.TEXTURE_2D);

		gl.bindTexture(gl.TEXTURE_2D, null);
	};


	p.bind = function(index, toDebug) {
		if(index == undefined) index = 0;
		if(!GL.shader) return;

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