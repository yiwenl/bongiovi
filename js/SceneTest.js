// SceneTest.js

(function() {
	var GL;

	SceneTest = function() {
		bongiovi.Scene.call(this);


		this.camera = new bongiovi.SimpleCamera();
		
		this.camera.setPerspective(45*Math.PI/180, window.innerWidth/window.innerHeight, 5, 3000);
		this.sceneRotation.lock();

		// var rot = quat.fromValues(-0.1628209352493286, -0.4727315604686737, 0.8660336136817932, 0);
		// console.log(rot);
		// this.sceneRotation.setCameraPos(rot);
	}
	

	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
		GL = bongiovi.GL;
		GL.gl.disable(GL.gl.CULL_FACE);
		// console.log("Init Texture");
		this.texture = new bongiovi.GLTexture(images.image0);
	};

	p._initViews = function() {
		// console.log("Init Views");
		this._vCopy = new bongiovi.ViewCopy();
		this._vPlane = new ViewPlane();
	};

	p.update = function() {
		s.update.call(this);

		// console.log(this.camera);
	};

	p.render = function() {
		this._vPlane.render(this.texture);
		// GL.setMatrices(this.cameraOtho);
		// GL.rotate(this.rotationFront);

		// this._vCopy.render(this.texture);
	};
})();