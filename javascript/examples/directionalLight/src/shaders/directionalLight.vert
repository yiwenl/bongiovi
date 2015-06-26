precision highp float;
attribute vec3 aVertexPosition;
attribute vec3 aNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec2 vTextureCoord;
varying vec3 vColor;


const vec3 lightDir = vec3(1.0, 1.0, 1.0);

const vec3 lightPos = vec3(30.0, 30.0, 30.0);
const float lightDist = 100.0;


const vec3 lightColor = vec3(1.0);
const vec3 ambientColor = vec3(.25);
const float lightAmt = 1.0;

void main(void) {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
	vTextureCoord = aTextureCoord;


	float lightFactor = dot(aNormal, normalize(lightPos));
	float lengthToLight = distance(aVertexPosition, lightPos);
	float lightOffset = 0.0;
	if(lengthToLight < lightDist) {
		lightOffset = 1.0 - lengthToLight/lightDist;
	}

	vec3 color = ambientColor + lightFactor * lightColor * lightAmt * lightOffset;

	vColor = color;
}