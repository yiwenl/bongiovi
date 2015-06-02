precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float brightness;

void main(void) {
	vec4 color = texture2D(texture, vTextureCoord);
	color.rgb += vec3(brightness);
	gl_FragColor = color;
}