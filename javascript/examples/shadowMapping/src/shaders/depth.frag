// depth.frag

precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D texture;

const float NEAR 	= 5.0;
const float FAR 	= 3000.0;


float getDepth(float z, float n, float f) {
	return (2.0 * n) / (f + n - z*(f-n));
}

void main(void) {
	float d = texture2D(texture, vTextureCoord).r;
    gl_FragColor = vec4(vec3(getDepth(d, NEAR, FAR)), 1.0);
}