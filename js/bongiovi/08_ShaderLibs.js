// 17_ShaderLibs.js

(function() {
	var ShaderLibs = function() { }

	ShaderLibs.shaders = {};

	ShaderLibs.shaders.copyVert = 
		"precision highp float;"+
		"attribute vec3 aVertexPosition;"+
		"attribute vec2 aTextureCoord;"+
		""+
		"uniform mat4 uMVMatrix;"+
		"uniform mat4 uPMatrix;"+
		""+
		"varying vec2 vTextureCoord;"+
		""+
		"void main(void) {"+
		"    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);"+
		"    vTextureCoord = aTextureCoord;"+
		"}";


	ShaderLibs.shaders.generalVert = 
		"precision highp float;"+
		"attribute vec3 aVertexPosition;"+
		"attribute vec2 aTextureCoord;"+
		""+
		"uniform mat4 uMVMatrix;"+
		"uniform mat4 uPMatrix;"+
		"uniform vec3 position;"+
		"uniform vec3 scale;"+
		""+
		"varying vec2 vTextureCoord;"+
		""+
		"void main(void) {"+
		"    vec3 pos = aVertexPosition;"+
		"    pos *= scale;"+
		"    pos += position;"+
		"    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);"+
		"    vTextureCoord = aTextureCoord;"+
		"}";


	ShaderLibs.shaders.copyFrag = 
		"precision highp float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		""+
		"void main(void) {"+
		"    gl_FragColor = texture2D(texture, vTextureCoord);"+
		"}";


	ShaderLibs.shaders.alphaFrag = 
		"precision highp float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		"uniform float opacity;"+
		""+
		"void main(void) {"+
		"    gl_FragColor = texture2D(texture, vTextureCoord);"+
		"    gl_FragColor.a *= opacity;"+
		"}";


	ShaderLibs.shaders.simpleColorFrag = 
		"precision highp float;"+
		"uniform vec3 color;"+
		"uniform float opacity;"+
		""+
		"void main(void) {"+
		"    gl_FragColor = vec4(color, opacity);"+
		"}";


	ShaderLibs.shaders.depthFrag = 
		"precision highp float;"+
		"varying vec2 vTextureCoord;"+
		"uniform sampler2D texture;"+
		"uniform float n;"+
		"uniform float f;"+
		""+
		"float getDepth(float z) {"+
		"	return (6.0 * n) / (f + n - z*(f-n));"+
		"}"+
		""+
		"void main(void) {"+
		"    float r = texture2D(texture, vTextureCoord).r;"+
		"    float grey = getDepth(r);"+
		"    gl_FragColor = vec4(grey, grey, grey, 1.0);"+
		"}";


	ShaderLibs.getShader = function(mId) {
		return this.shaders[mId];
	}

	bongiovi.ShaderLibs = ShaderLibs;
})();