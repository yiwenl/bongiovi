// ViewPlane.js

(function() {
	ViewPlane = function() {
		bongiovi.View.call(this);
		// bongiovi.View.call(this, "assets/shaders/copyNormal.vert", "assets/shaders/normal.frag");
	}

	var p = ViewPlane.prototype = new bongiovi.View();

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createPlane(200, 200, 1);
		// this.mesh.computeNormals();
	};


	p.render = function(texture) {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		bongiovi.GL.draw(this.mesh);
	};
})();