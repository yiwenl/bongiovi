// ViewPlane.js

(function() {
	ViewPlane = function() {
		bongiovi.View.call(this);
	}

	var p = ViewPlane.prototype = new bongiovi.View();

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createPlane(200, 200, 50);
	};


	p.render = function(texture) {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		bongiovi.GL.draw(this.mesh);
	};
})();