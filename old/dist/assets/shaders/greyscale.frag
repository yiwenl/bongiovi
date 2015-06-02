precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float greyscale;

void main(void) {
	vec4 color = texture2D(texture, vTextureCoord);
	float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));
	color.rgb = mix(vec3(grey), color.rgb, 1.0-greyscale);
	gl_FragColor = color;
}