// ViewDepth.js


(function() {
	var GL = bongiovi.GL;

	var ViewDepth = function(mNear, mFar) {
		this._near = mNear || 0;
		this._far = mFar || 0;
		bongiovi.View.call(this, null, bongiovi.ShaderLibs.getShader("depthFrag"));
	}

	var p = ViewDepth.prototype = new bongiovi.View();

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);
	};

	p.render = function(mTexture, camera) {
		if(camera) {
			this._near = camera.near;
			this._far = camera.far;
		}
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		this.shader.uniform("n", "uniform1f", this._near);
		this.shader.uniform("f", "uniform1f", this._far);
		mTexture.bind(0);
		GL.draw(this.mesh);
	};

	bongiovi.ViewDepth = ViewDepth;
})();