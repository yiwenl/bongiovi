// SceneTest.js

(function() {
	var GL;

	SceneTest = function() {
		bongiovi.Scene.call(this);
	}

	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
		GL = bongiovi.GL;
		console.log(GL);
		console.log("Init Texture");
		this.texture = new bongiovi.GLTexture(images.image0);
	};

	p._initViews = function() {
		console.log("Init Views");
		this._vCopy = new bongiovi.ViewCopy();
	};

	p.render = function() {
		GL.setMatrices(this.cameraOtho);
		GL.rotate(this.rotationFront);

		this._vCopy.render(this.texture);
	};
})();