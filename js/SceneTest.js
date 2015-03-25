// SceneTest.js

(function() {
	var GL = bongiovi.GL;
	var gl;

	SceneTest = function() {
		gl = GL.gl;
		gl.enable(gl.DEPTH_TEST);
		this._rotation = new bongiovi.QuatRotation();
		bongiovi.Scene.call(this);

		this.sceneRotation.lock();
		this.camera.lockRotation(false);
		
		// this.sceneRotation.inverseControl(true);
		// this.camera.inverseControl(true);
		// GL.gl.disable(GL.gl.DEPTH_TEST);

		// window.addEventListener("resize", this._onResize.bind(this));
	}


	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
		
		this.texture = new bongiovi.GLTexture(images.image0);
		this.textureWorld = new bongiovi.GLTexture(images.world);

		this._fbo = new bongiovi.FrameBuffer(window.innerWidth, window.innerHeight);
		// this._fboParticles = new bongiovi.FrameBuffer(params.numParticles, params.numParticles, {minFilter:gl.NEAREST, magFilter:gl.NEAREST, wrapS:gl.CLAMP_TO_EDGE, wrapT:gl.CLAMP_TO_EDGE});
	};

	p._initViews = function() {
		this._vCopy = new bongiovi.ViewCopy();
		this._vPlane = new ViewPlane();
		this._vSphere = new ViewSphere();
		this._vParticle = new ViewParticles();
		this._vSave = new ViewSave();
		this._vDepth = new bongiovi.ViewDepth();
		this._vMountains = new ViewMountains();
		this._vLight0 = new ViewLight([1.0, .95, .9]);

/*
		this._passTriangle = new bongiovi.Pass("assets/shaders/triblur.frag", 1024, 1024);
		this._passGrey = new bongiovi.post.PassGreyscale(.71);
		this._passContrast = new bongiovi.post.PassContrast(2.2);
		this._passBrightness = new bongiovi.post.PassBrightness(.25);
		this._passTriBlur = new bongiovi.post.PassTriangleBlur(15);

		this._effectComposer = new bongiovi.EffectComposer();
		this._effectComposer.addPass(this._passBrightness);
		this._effectComposer.addPass(this._passGrey);
		this._effectComposer.addPass(this._passContrast);
		this._effectComposer.addPass(this._passTriBlur);

		this.errMsg = [];

		this.errMsg[gl.FRAMEBUFFER_COMPLETE] = "FRAMEBUFFER_COMPLETE";
		this.errMsg[gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT] = "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
		this.errMsg[gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT] = "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
		this.errMsg[gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS] = "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
		this.errMsg[gl.FRAMEBUFFER_UNSUPPORTED] = "FRAMEBUFFER_UNSUPPORTED";

		GL.setViewport(0, 0, GL.width, GL.height);
*/		
	};

	p.renderParticles = function() {
		gl.disable(gl.DEPTH_TEST);
		GL.setMatrices(this.cameraOtho);
		GL.rotate(this.rotationFront);

		this._fboParticles.bind();
		GL.setViewport(0, 0, this._fboParticles.width, this._fboParticles.height);
		this._vSave.render();
		this._fboParticles.unbind();		

		GL.setViewport(0, 0, GL.width, GL.height);
		this._vCopy.render(this._fboParticles.getTexture() ) ;
		GL.setMatrices(this.camera);
		GL.rotate(this.sceneRotation.matrix);

		this._vParticle.render();		
	};



	p.render = function() {

		//	LIGHT TESTING
		var time = new Date().getTime() * .001;


		// this.renderParticles();
		// return;

		// this._vPlane.render(this.texture);
		// this._vSphere.render(this.textureWorld);
		var radius = 120 + 50 * Math.sin(time) * Math.cos(time);
		this._vLight0.position[0] = Math.cos(time) * radius;
		this._vLight0.position[2] = Math.sin(time) * radius;
		this._vLight0.render();

		this._vMountains.render(this._vLight0.position, this._vLight0.color);

		// this._fbo.bind();
		// var grey = .1;
		// GL.clear(grey, grey, grey, 1.0);
		// this._vPlane.render(this.texture);
		// this._rotation.update();
		// GL.rotate(this._rotation.matrix);
		// this._vSphere.render(this.textureWorld);
		// this._fbo.unbind();

		// GL.setMatrices(this.cameraOtho);
		// GL.rotate(this.rotationFront);

		// this._effectComposer.render(this._fbo.getTexture() ) ;
		// this._effectComposer.render(this._fbo.getDepthTexture() ) ;
		// this._vCopy.render(this._fbo.getTexture() );
		// this._vDepth.render( this._fbo.getDepthTexture(), this.camera );

		// this._vCopy.render(this._fboParticles.getTexture() );
		// this._vCopy.render(this._effectComposer.getTexture() );
		// this._vDepth.render(this._fbo.getDepthTexture() );
	};


	p._onResize = function() {
		GL.setSize(window.innerWidth, window.innerHeight);
		this.resize();
		this.render();
	};
	
})();