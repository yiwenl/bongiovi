// SceneTest.js

(function() {
	var GL = bongiovi.GL;
	var gl;

	SceneTest = function() {
		gl = GL.gl;
		bongiovi.Scene.call(this);
		this.sceneRotation.lock(true);
		this.camera.lockRotation(false);
	}


	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
	};

	p._initViews = function() {
		this._vMountains = new ViewMountains();
		this._vLight0 = new ViewLight();
	};


	p.render = function() {
		var grey = .05;
		GL.clear(grey, grey, grey*.5, 1.0);
		var time = new Date().getTime() * .001;

		var radius = 120 + 60 * Math.sin(time) * Math.cos(time);
		this._vLight0.position[0] = Math.cos(time) * radius;
		this._vLight0.position[1] = Math.cos(time*.8257349534) * Math.sin(time*.8294728954) * 40 + 50;
		this._vLight0.position[2] = Math.sin(time) * radius;
		this._vLight0.render();


		this._vMountains.render(this._vLight0.position, this._vLight0.color, this.camera.position);
	};
	
})();