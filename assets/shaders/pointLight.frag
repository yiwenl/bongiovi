precision highp float;
varying vec3 vNormal;
varying vec3 vViewPosition;

const vec3 ambientColor = vec3(.2);
const vec3 lightColor = vec3(1.0);
const vec3 specularLightColor = vec3(1.0);
const vec3 specular = vec3(.1);
const float lightAmount = .8;
const float diffuse = .2;
const float shininess = 30.0;
const float specularStrength = 1.0;

uniform vec3 lightPosition;


void main(void) {
	vec3 pointDiffuse = vec3( 0.0 );
	vec3 pointSpecular = vec3( 0.0 );
	vec3 color = ambientColor;

	vec3 lightDir = lightPosition - vViewPosition;
	vec3 nLightDir = normalize(lightDir);

	//	DIFFUSE
	float lightWeight = max(dot(nLightDir, vNormal), 0.0);
	pointDiffuse += lightColor * lightWeight * lightAmount;
	pointDiffuse *= 0.0;


	//	SPECULAR
	float lightDist = length(lightDir);
	pointSpecular += pow(lightWeight / lightDist * shininess, 3.0) * specularLightColor;



    gl_FragColor = vec4(color + pointDiffuse + pointSpecular, 1.0);
}