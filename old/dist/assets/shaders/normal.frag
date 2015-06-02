precision highp float;
varying vec3 vNormal;

void main(void) {
	vec3 color = vNormal * .5 + vec3(.5);
    gl_FragColor = vec4(color, 1.0);
}