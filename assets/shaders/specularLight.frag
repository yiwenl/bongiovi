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
	
	float attenuation 			= 1.0 / (1.0 + mappedDist);
	vec3 diffuseColor     		= lightColor * diffuse * max(0.0, dot(nLightDirection, vNormal)) * attenuation;


	//	SPECULAR

	vec3 specularReflection 	= vec3(.0);
	// if(dot(vNormal, nLightDirection) > 0.0 ) {
	// 	vec3 reflection = reflect(-nLightDirection, vNormal);
	// 	float reflectionWeight = max(dot(reflection, vViewDirection), 0.0);
	// 	specularReflection = specularLightColor * pow(reflectionWeight, shininess);
	// }


	vec3 incidenceVector = nLightDirection;
	vec3 reflectionVector = reflect(incidenceVector, vNormal);
	vec3 surfaceToCamera = normalize(vViewDirection - vVertexPosition);
	float cosAngle = max(0.0, dot(surfaceToCamera, reflectionVector));
	float specularCoefficient = pow(cosAngle, shininess);
	specularReflection = specularCoefficient * specularLightColor;

    gl_FragColor = vec4(color + diffuseColor + specularReflection, 1.0);
    // vec3 gamma = vec3(1.0/2.2, 1.0/2.2, 1.0/2.2);
    // gl_FragColor.rgb = pow(gl_FragColor.rgb, gamma);

    // gl_FragColor = vec4(vNormal * .5 + vec3(.5), 1.0);
    // vec3 vertexColor = normalize(vVertexPosition);
    // gl_FragColor = vec4(vertexColor * .5 + vec3(.5), 1.0);
}