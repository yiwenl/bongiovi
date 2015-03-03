// SceneTest.js

(function() {
	var GL;

	SceneTest = function() {
		bongiovi.Scene.call(this);
		// this.sceneRotation.lock();
		// this.camera.lockRotation(false);
		
		// this.sceneRotation.inverseControl(true);
		// this.camera.inverseControl(true);
	}


	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
		GL = bongiovi.GL;
		// GL.gl.disable(GL.gl.CULL_FACE);
		// console.log("Init Texture");
		this.texture = new bongiovi.GLTexture(images.image0);
		this.textureWorld = new bongiovi.GLTexture(images.world);
	};

	p._initViews = function() {
		// console.log("Init Views");
		this._vCopy = new bongiovi.ViewCopy();
		this._vPlane = new ViewPlane();
		this._vSphere = new ViewSphere();
	};

	p.update = function() {
		s.update.call(this);

		// console.log(this.camera);
	};

	p.render = function() {
		// this._vPlane.render(this.texture);
		this._vSphere.render(this.textureWorld);
		// GL.setMatrices(this.cameraOtho);
		// GL.rotate(this.rotationFront);

		// this._vCopy.render(this.texture);
	};
})();