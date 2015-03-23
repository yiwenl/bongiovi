// SceneTest.js

(function() {
	var GL = bongiovi.GL;
	var gl;

	SceneTest = function() {
		gl = GL.gl;
		bongiovi.Scene.call(this);
	}


	var p = SceneTest.prototype = new bongiovi.Scene();
	var s = bongiovi.Scene.prototype;

	p._initTextures = function() {
	};

	p._initViews = function() {
		this._vMountains = new ViewMountains();
		this._vLight = new ViewLight();
	};


	p.render = function() {
		this._vMountains.render();
		this._vLight.render(this._vMountains.lightDirection);
	};
	
})();