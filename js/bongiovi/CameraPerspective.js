bongiovi = window.bongiovi || {};

(function() {

	var SuperClass = bongiovi.Camera;

	var CameraPerspective = function() {
		SuperClass.call(this);

		this.projection = mat4.create();
		mat4.identity(this.projection);
		this.mtxFinal = mat4.create();
	};

	var p = CameraPerspective.prototype = new SuperClass();
	var s = SuperClass.prototype;

	p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
		mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
	};

	p.getMatrix = function() {
		mat4.multiply(this.mtxFinal, this.projection, this.matrix);
		return this.mtxFinal;
	};

	bongiovi.CameraPerspective = CameraPerspective;

})();