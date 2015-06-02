precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float contrast;

float _contrast(float value, float scale) {
	return clamp( .5 + (value - .5) * scale, 0.0, 1.0);
}

vec3 _contrast(vec3 value, float scale) {
	return vec3(_contrast(value.r, scale), _contrast(value.g, scale), _contrast(value.b, scale) );
}

void main(void) {
	vec4 color = texture2D(texture, vTextureCoord);
	color.rgb = _contrast(color.rgb, contrast);
	gl_FragColor = color;
}