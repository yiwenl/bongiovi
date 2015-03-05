// PassBrightness.js

(function() {

	var GL = bongiovi.GL;

	var brightnessFragmentShader = 
		"precision mediump float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		"uniform float brightness;"+
		""+
		"void main(void) {"+
		"	vec4 color = texture2D(texture, vTextureCoord);"+
		"	color.rgb += vec3(brightness);"+
		"	gl_FragColor = color;"+
		"}";

	var PassBrightness = function(mValue, mWidth, mHeight) {
		this.value = mValue;
		if(mValue == undefined) this.value = 0.0;
		bongiovi.Pass.call(this, brightnessFragmentShader, mWidth, mHeight);
	}

	var p = PassBrightness.prototype = new bongiovi.Pass();
	var s = bongiovi.Pass.prototype;

	p.render = function(texture) {
		this.fbo.bind();
		GL.setViewport(0, 0, this.fbo.width, this.fbo.height);
		GL.clear(0, 0, 0, 0);
		// console.log(this.view.shader);
		this.view.shader.bind();
		this.view.shader.uniform("brightness", "uniform1f", this.value)
		this.view.render(texture);
		this.fbo.unbind();
		GL.setViewport(0, 0, GL.canvas.width, GL.canvas.height);

		return this.fbo.getTexture();
	};

	if(bongiovi.post == undefined) bongiovi.post = {};
	bongiovi.post.PassBrightness = PassBrightness;
})();