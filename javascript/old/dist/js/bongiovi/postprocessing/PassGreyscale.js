// PassGreyscale.js

(function() {

	var GL = bongiovi.GL;

	var greyscaleFragmentShader = 
		"precision mediump float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		"uniform float greyscale;"+
		""+
		"void main(void) {"+
		"	vec4 color = texture2D(texture, vTextureCoord);"+
		"	float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));"+
		"	color.rgb = mix(vec3(grey), color.rgb, 1.0-greyscale);"+
		"	gl_FragColor = color;"+
		"}";

	var PassGreyscale = function(mValue, mWidth, mHeight) {
		this.value = mValue;
		if(mValue == undefined) this.value = 0.0;
		bongiovi.Pass.call(this, greyscaleFragmentShader, mWidth, mHeight);
	}

	var p = PassGreyscale.prototype = new bongiovi.Pass();
	var s = bongiovi.Pass.prototype;

	p.render = function(texture) {
		this.fbo.bind();
		GL.setViewport(0, 0, this.fbo.width, this.fbo.height);
		GL.clear(0, 0, 0, 0);
		// console.log(this.view.shader);
		this.view.shader.bind();
		this.view.shader.uniform("greyscale", "uniform1f", this.value)
		this.view.render(texture);
		this.fbo.unbind();
		GL.setViewport(0, 0, GL.canvas.width, GL.canvas.height);

		return this.fbo.getTexture();
	};

	if(bongiovi.post == undefined) bongiovi.post = {};
	bongiovi.post.PassGreyscale = PassGreyscale;
})();