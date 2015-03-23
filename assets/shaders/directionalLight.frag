precision highp float;
varying vec3 vNormal;

const vec3 ambientColor = vec3(.2);
// const vec3 lightDirection = vec3(1.0);
const vec3 lightColor = vec3(1.0);
const float lightAmount = .8;

uniform vec3 lightDirection;


void main(void) {
	vec3 color = ambientColor;
	vec3 lightDir = normalize(lightDirection);

	float lightWeight = max(0.0, dot(lightDir, vNormal));
	color += lightColor * lightAmount * lightWeight;

    gl_FragColor = vec4(color, 1.0);
}