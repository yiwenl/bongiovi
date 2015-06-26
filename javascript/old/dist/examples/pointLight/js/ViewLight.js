// ViewLight.js

(function() {
	var GL = bongiovi.GL;

	ViewLight = function(mColor) {
		this._color = mColor || [1, 1, 1];
		this.position = [0, 0, 0];
		bongiovi.View.call(this, bongiovi.ShaderLibs.get("generalVert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
	}

	var p = ViewLight.prototype = new bongiovi.View();

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createSphere(5, 10);
	};


	p.render = function() {
		this.shader.bind();
		this.shader.uniform("position", "uniform3fv", this.position);
		this.shader.uniform("scale", "uniform3fv", [1, 1, 1]);
		this.shader.uniform("color", "uniform3fv", this._color);
		this.shader.uniform("opacity", "uniform1f", 1);

		GL.draw(this.mesh);
	};


	p.__defineGetter__("color", function() {
		return this._color;
	});
})();