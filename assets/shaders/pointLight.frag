precision highp float;
varying vec3 vNormal;
varying vec3 vVertexPosition;

const vec3 ambientColor = vec3(.2);
// const vec3 lightColor = vec3(1.0, 0.0, 0.0);
const float diffuse = .8;
const float lightAttenuation = 1.0;
const float lightRadius = 200.0;

uniform vec3 lightDirection;
uniform vec3 lightColor;


void main(void) {
	vec3 color            		= ambientColor;
	vec3 lightPosition    		= lightDirection;
	vec3 relatedLightPosition  	= lightPosition - vVertexPosition;
	float distanceToLight 		= length(relatedLightPosition);
	vec3 nLightDirection  		= normalize(relatedLightPosition);
	float mappedDist 			= clamp(distanceToLight, 0.0, lightRadius) / lightRadius;
	
	float attenuation 			= 1.0 / (1.0 + mappedDist);
	vec3 diffuseColor     		= lightColor * diffuse * max(0.0, dot(nLightDirection, vNormal)) * attenuation;

    gl_FragColor = vec4(color + diffuseColor, 1.0);
}