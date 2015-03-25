precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform vec3 viewPosition;
uniform vec3 lightDirection;

varying vec2 vTextureCoord;
varying vec3 vVertexPosition;
varying vec3 vNormal;
varying vec3 vViewDirection;
varying vec3 vLightDirection;

void main(void) {
	vec4 mvPosition = uMVMatrix * vec4(aVertexPosition, 1.0);
    gl_Position = uPMatrix * mvPosition;
    vTextureCoord = aTextureCoord;
    vVertexPosition = vec3(aVertexPosition.xyz);
    vNormal = aNormal;
    vViewDirection = viewPosition;
    vLightDirection = lightDirection;
}