// PassTriangleBlur.js

(function() {

	var GL = bongiovi.GL;

	var triblurFragmentShader = 
		"precision mediump float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		"uniform vec2 delta;"+
		""+
		"float random(vec3 scale, float seed) {"+
		"	return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);"+
		"}"+
		""+
		"void main(void) {"+
		""+
		"	vec4 color = vec4(0.0);"+
		"	float total = 0.0;"+
		"	float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);"+
		""+
		"	for (float t = -30.0; t <= 30.0; t++) {"+
		"		float percent = (t + offset - 0.5) / 30.0;"+
		"		float weight = 1.0 - abs(percent);"+
		"		vec4 sample = texture2D(texture, vTextureCoord + delta * percent);"+
		"		"+
		"		sample.rgb *= sample.a;"+
		"		color += sample * weight;"+
		"		total += weight;"+
		"	}"+
		""+
		"	gl_FragColor = color/total;"+
		"	gl_FragColor.rgb /= gl_FragColor.a + .00001;"+
		"}";

	var PassTriangleBlurSingle = function(mValue, mWidth, mHeight) {
		this.value = mValue;
		if(mValue == undefined) this.value = 0.0;
		bongiovi.Pass.call(this, triblurFragmentShader, mWidth, mHeight);
	}

	var p = PassTriangleBlurSingle.prototype = new bongiovi.Pass();
	var s = bongiovi.Pass.prototype;

	p.render = function(texture) {
		this.fbo.bind();
		GL.setViewport(0, 0, this.fbo.width, this.fbo.height);
		GL.clear(0, 0, 0, 0);
		this.view.shader.bind();
		this.view.shader.uniform("delta", "uniform2fv", this.value)
		this.view.render(texture);
		this.fbo.unbind();
		GL.setViewport(0, 0, GL.canvas.width, GL.canvas.height);

		return this.fbo.getTexture();
	};

	if(bongiovi.post == undefined) bongiovi.post = {};
	bongiovi.post.PassTriangleBlurSingle = PassTriangleBlurSingle;
})();


(function() {

	var GL = bongiovi.GL;

	var PassTriangleBlur = function(mValue, mWidth, mHeight) {
		this.value = mValue;
		this._width = mWidth;
		this._height = mHeight;
		if(mValue == undefined) this.value = 0.0;

		bongiovi.EffectComposer.call(this);
		this._init();
	}

	var p = PassTriangleBlur.prototype = new bongiovi.EffectComposer();
	var s = bongiovi.EffectComposer.prototype;

	p._init = function() {
		this._passVertical = new bongiovi.post.PassTriangleBlurSingle([0, this.value/GL.canvas.height], this._width, this._height);
		this._passHorizontal = new bongiovi.post.PassTriangleBlurSingle([this.value/GL.canvas.width, 0], this._width, this._height);
		

		this.addPass(this._passVertical);
		this.addPass(this._passHorizontal);
	};

	p.render = function(texture) {
		this._passVertical.value = [0, this.value/GL.canvas.height];
		this._passHorizontal.value = [this.value/GL.canvas.width, 0];

		return s.render.call(this, texture);
	};

	if(bongiovi.post == undefined) bongiovi.post = {};
	bongiovi.post.PassTriangleBlur = PassTriangleBlur;
})();