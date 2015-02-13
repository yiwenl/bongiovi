bongiovi = window.bongiovi || {};

(function() {

	var Camera = function() {
		this.matrix = mat4.create();
		mat4.identity(this.matrix);
	};

	var p = Camera.prototype;

	p.lookAt = function(aEye, aCenter, aUp) {
		mat4.identity(this.matrix);
		mat4.lookAt(this.matrix, aEye, aCenter, aUp);
	};

	p.getMatrix = function() {
		return this.matrix;
	};

	bongiovi.Camera = Camera;
	
})();