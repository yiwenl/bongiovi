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
