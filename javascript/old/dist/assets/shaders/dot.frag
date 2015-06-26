precision mediump float;
varying vec2 vTextureCoord;
// uniform sampler2D uSampler0;

void main(void) {
	vec2 center = vec2(.5);
	if(distance(center, gl_PointCoord) > .5) discard;
    gl_FragColor = vec4(1.0);
}