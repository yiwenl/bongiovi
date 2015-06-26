precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D texture;


vec3 greyscale(vec3 value) {
	float grey = (value.x + value.y + value.z) / 3.0;
	return vec3(grey);
}


float contrast(float value, float scale) {
	return .5 + (value - .5) * scale;
}


vec3 contrast(vec3 value, float scale) {
	return vec3(contrast(value.r, scale), contrast(value.g, scale), contrast(value.b, scale));
}

void main(void) {
	vec4 color = texture2D(texture, vTextureCoord);

	color.rgb = greyscale(color.rgb);
	color.rgb = contrast(color.rgb, 2.0);
    gl_FragColor = color;
}