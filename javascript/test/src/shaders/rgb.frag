// rgb.frag

precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D texture;

void main(void) {
	const float shift = .01;
	vec4 color = texture2D(texture, vTextureCoord);
	color.r = texture2D(texture, vTextureCoord-vec2(shift, 0.0)).r;
	color.b = texture2D(texture, vTextureCoord+vec2(shift, 0.0)).b;

	gl_FragColor = color;
}