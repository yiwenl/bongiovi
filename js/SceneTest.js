// SceneTest.js

(function() {
	var GL = bongiovi.GL;

	SceneTest = function() {
		bongiovi.Scene.call(this);
		// this.sceneRotation.lock();
		// this.camera.lockRotation(false);
		
		// this.sceneRotation.inverseControl(true);
		// this.camera.inverseControl(true);
		GL.gl.disable(GL.gl.DEPTH_TEST);
	}


	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
		
		this.texture = new bongiovi.GLTexture(images.image0);
		this.textureWorld = new bongiovi.GLTexture(images.world);

		this._fbo = new bongiovi.FrameBuffer(window.innerWidth, window.innerHeight);
	};

	p._initViews = function() {
		this._vCopy = new bongiovi.ViewCopy();
		this._vPlane = new ViewPlane();
		this._vSphere = new ViewSphere();

		this._passTriangle = new bongiovi.Pass("assets/shaders/triblur.frag", 1024, 1024);
		// this._passGrey = new bongiovi.Pass("assets/shaders/greyscale.frag", 1024, 1024);
		this._passGrey = new bongiovi.post.PassGreyscale(.1, window.innerWidth, window.innerHeight);
		this._passContrast = new bongiovi.post.PassContrast(1.2, window.innerWidth, window.innerHeight);
		this._passBrightness = new bongiovi.post.PassBrightness(.15, window.innerWidth, window.innerHeight);
		this._effectComposer = new bongiovi.EffectComposer();

		this._effectComposer.addPass(this._passGrey);
		this._effectComposer.addPass(this._passContrast);
		this._effectComposer.addPass(this._passBrightness);
	};

	p.update = function() {
		s.update.call(this);
	};

	p.render = function() {
		// this._vPlane.render(this.texture);

		this._fbo.bind();
		var grey = .1;
		GL.clear(grey, grey, grey, 1.0);
		this._vSphere.render(this.textureWorld);
		this._fbo.unbind();


		GL.setMatrices(this.cameraOtho);
		GL.rotate(this.rotationFront);
		this._effectComposer.render(this._fbo.getTexture() ) ;
		// this._vCopy.render(this._fbo.getTexture() );


		this._vCopy.render(this._effectComposer.getTexture() );
		// this._vCopy.render(this.texture);
	};
})();