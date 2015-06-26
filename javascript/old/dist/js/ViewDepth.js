// ViewDepth.js

(function() {
	var GL = bongiovi.GL;

	ViewDepth = function() {
		bongiovi.View.call(this, null, "assets/shaders/depth.frag");
	}

	var p = ViewDepth.prototype = new bongiovi.View();
	var s = bongiovi.View.prototype;


	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);
	};

	p.render = function(texture) {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		GL.draw(this.mesh);
	};
})();