// PassContrast.js

(function() {

	var GL = bongiovi.GL;

	var contrastFragmentShader = 
		"precision mediump float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		"uniform float contrast;"+
		""+
		"float _contrast(float value, float scale) {"+
		"	return clamp( .5 + (value - .5) * scale, 0.0, 1.0);"+
		"}"+
		""+
		"vec3 _contrast(vec3 value, float scale) {"+
		"	return vec3(_contrast(value.r, scale), _contrast(value.g, scale), _contrast(value.b, scale) );"+
		"}"+
		""+
		"void main(void) {"+
		"	vec4 color = texture2D(texture, vTextureCoord);"+
		"	color.rgb = _contrast(color.rgb, contrast);"+
		"	gl_FragColor = color;"+
		"}";

	var PassContrast = function(mValue, mWidth, mHeight) {
		this.value = mValue;
		if(mValue == undefined) this.value = 1.0;
		bongiovi.Pass.call(this, contrastFragmentShader, mWidth, mHeight);
	}

	var p = PassContrast.prototype = new bongiovi.Pass();
	var s = bongiovi.Pass.prototype;

	p.render = function(texture) {
		this.fbo.bind();
		GL.setViewport(0, 0, this.fbo.width, this.fbo.height);
		GL.clear(0, 0, 0, 0);
		this.view.shader.bind();
		this.view.shader.uniform("contrast", "uniform1f", this.value)
		this.view.render(texture);
		this.fbo.unbind();
		GL.setViewport(0, 0, GL.canvas.width, GL.canvas.height);

		return this.fbo.getTexture();
	};

	if(bongiovi.post == undefined) bongiovi.post = {};
	bongiovi.post.PassContrast = PassContrast;
})();