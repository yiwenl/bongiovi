// FrameBuffer.js
(function() {
	var gl, GL;
	var GLTexture = bongiovi.GLTexture;
	var isPowerOfTwo = function(x) {	return !(x == 0) && !(x & (x - 1));	}

	var FrameBuffer = function(width, height, options) {
		GL = bongiovi.GL;
		gl = GL.gl;
		options        = options || {};
		this.width     = width;
		this.height    = height;
		this.magFilter = options.magFilter || gl.LINEAR;
		this.minFilter = options.minFilter || gl.LINEAR;
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
		this.texture            = gl.createTexture();
		
		this.glTexture			= new GLTexture(this.texture, true);
		
		this.frameBuffer        = gl.createFramebuffer();		
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
		this.frameBuffer.width  = this.width;
		this.frameBuffer.height = this.height;

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


		// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
		if(GL.depthTextureExt) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
		else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
		
		// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

		// if(this.magFilter == gl.NEAREST && this.minFilter == gl.NEAREST) {
		// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
		// 	console.debug("Both Nearest", this.floatTextureExt);
		// } else {
		// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
		// }

		if(this.minFilter == gl.LINEAR_MIPMAP_NEAREST)	gl.generateMipmap(gl.TEXTURE_2D);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
		if(GL.depthTextureExt == null) {
			var renderbuffer = gl.createRenderbuffer();
			gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
			// gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.frameBuffer.width, this.frameBuffer.height);
			// gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);	
			// if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
		 //      throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
		 //    }

		 	gl.renderbufferStorage( gl.RENDERBUFFER, gl.RGBA4, this.frameBuffer.width, this.frameBuffer.height );
		} else {
			this.depthTexture       = gl.createTexture();
			this.glDepthTexture		= new GLTexture(this.depthTexture, true);

			gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

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