precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

//float n = 5.0;
//float f = 800.0;
	
float getDepth(float z, float n, float f) {
	return (2.0 * n) / (f + n - z*(f-n));
}

void main(void) {
    gl_FragColor = texture2D(texture, vTextureCoord);
    gl_FragColor.rgb = vec3(getDepth(gl_FragColor.r, 5.0, 800.0));
}