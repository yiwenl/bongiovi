#define SHADER_NAME DIRECTIONAL_LIGHTING_PER_FRAG_FRAGMENT

precision highp float;

const vec3 lightPos = vec3(30.0, 30.0, 30.0);
const float lightDist = 100.0;

const vec3 lightColor = vec3(1.0);
const vec3 ambientColor = vec3(.25);
const float lightAmt = 1.0;


varying vec3 vNormal;
varying vec3 vVertexPosition;

void main(void) {
	float lightFactor = dot(vNormal, normalize(lightPos));
	float lengthToLight = distance(vVertexPosition, lightPos);
	float lightOffset = 0.0;
	if(lengthToLight < lightDist) {
		lightOffset = 1.0 - lengthToLight/lightDist;
	}

	vec3 color = ambientColor + lightFactor * lightColor * lightAmt * lightOffset;


	gl_FragColor = vec4(color, 1.0);
}