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