precision highp float;
varying vec3 vNormal;
varying vec3 vLightDirection;

const vec3 ambientColor = vec3(.2);
const vec3 lightColor = vec3(1.0);
const float diffuse = .8;

void main(void) {
	vec3 color = ambientColor;
	vec3 lightDir = normalize(vLightDirection);
	vec3 diffuseReflection = lightColor * diffuse * max(0.0, dot(lightDir, vNormal));

    gl_FragColor = vec4(color + diffuseReflection, 1.0);
}