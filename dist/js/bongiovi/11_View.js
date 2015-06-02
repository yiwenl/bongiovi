(function() {

	var View = function(aPathVert, aPathFrag) {
		this.shader = new bongiovi.GLShader(aPathVert, aPathFrag);
		this._init();
	};

	var p = View.prototype;

	p._init = function() {
		// console.log("Should be overwritten by SuperClass");
	};

	p.render = function() {
		// console.log("Should be overwritten by SuperClass");
	};

	bongiovi.View = View;
	
})();