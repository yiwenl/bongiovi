precision highp float;
varying vec3 vNormal;
varying vec3 vVertexPosition;
varying vec3 vViewDirection;
varying vec3 vLightDirection;

const float diffuse = .8;
const float lightAttenuation = 1.0;
// const float shininess = 10.0;


uniform vec3 lightColor;
uniform vec3 ambientColor;
uniform vec3 specularLightColor;
uniform float lightRadius;
uniform float shininess;


void main(void) {
	vec3 color            		= ambientColor;
	vec3 lightPosition    		= vLightDirection;
	vec3 relatedLightPosition  	= lightPosition - vVertexPosition;
	float distanceToLight 		= length(relatedLightPosition);
	vec3 nLightDirection  		= normalize(relatedLightPosition);
	float mappedDist 			= clamp(distanceToLight, 0.0, lightRadius) / lightRadius;
	
	//	DIFFUSE	
	float attenuation 			= 1.0 / (1.0 + mappedDist);
	vec3 diffuseColor     		= lightColor * diffuse * max(0.0, dot(nLightDirection, vNormal)) * attenuation;


	//	SPECULAR
	vec3 specularReflection 	= vec3(.0);
	vec3 incidenceVector = -nLightDirection;
	vec3 reflectionVector = reflect(incidenceVector, vNormal);
	vec3 surfaceToCamera = normalize(vViewDirection - vVertexPosition);
	float cosAngle = max(0.0, dot(surfaceToCamera, normalize(reflectionVector)));
	float specularCoefficient = pow(cosAngle, shininess);
	specularReflection = specularCoefficient * specularLightColor * attenuation;

    gl_FragColor = vec4(color + diffuseColor + specularReflection, 1.0);
}