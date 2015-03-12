(function() {

	var SuperClass = bongiovi.View;

	var ViewCopy = function(aPathVert, aPathFrag) {
		SuperClass.call(this, aPathVert, aPathFrag);
	};

	var p = ViewCopy.prototype = new SuperClass();
	var s = SuperClass.prototype;

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);
	};

	p.render = function(aTexture) {
		if(!this.shader.isReady())return;
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		aTexture.bind(0);
		bongiovi.GLTool.draw(this.mesh);
	};

	bongiovi.ViewCopy = ViewCopy;
})();