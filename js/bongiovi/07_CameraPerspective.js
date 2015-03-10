bongiovi = window.bongiovi || {};

(function() {

	var SuperClass = bongiovi.Camera;

	var CameraPerspective = function() {
		SuperClass.call(this);

		this.projection = mat4.create();
		this.mtxFinal = mat4.create();
	};

	var p = CameraPerspective.prototype = new SuperClass();
	var s = SuperClass.prototype;

	p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
		this._fov = aFov;
		this._near = aNear;
		this._far = aFar;
		mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
	};

	p.getMatrix = function() {
		mat4.multiply(this.mtxFinal, this.projection, this.matrix);
		return this.mtxFinal;
	};

	p.resize = function(aAspectRatio) {
		console.debug("Reset camera aspect ratio");
		mat4.perspective(this.projection, this._fov, aAspectRatio, this._near, this._far);
	};

	bongiovi.CameraPerspective = CameraPerspective;

})();