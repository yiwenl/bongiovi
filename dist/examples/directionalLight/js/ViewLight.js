// ViewLight.js

(function() {
	var GL = bongiovi.GL;

	ViewLight = function() {
		bongiovi.View.call(this, bongiovi.ShaderLibs.get("generalVert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
	}

	var p = ViewLight.prototype = new bongiovi.View();

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createSphere(10, 10);
	};

	p.render = function(position) {
		var v = position.concat();
		var radius = 200;
		v[0] *= radius;
		v[1] *= radius;
		v[2] *= radius;

		this.shader.bind();
		this.shader.uniform("position", "uniform3fv", v);
		this.shader.uniform("scale", "uniform3fv", [1, 1, 1]);
		this.shader.uniform("color", "uniform3fv", [1, 1, 1]);
		this.shader.uniform("opacity", "uniform1f", 1);

		GL.draw(this.mesh);
	};
})();