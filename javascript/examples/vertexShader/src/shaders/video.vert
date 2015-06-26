precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

uniform float time;
uniform sampler2D texture;

varying vec2 vTextureCoord;
varying vec3 vColor;

void main(void) {

	vec3 color = vec3(1.0);
	vec3 pos = aVertexPosition;

    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);
    vTextureCoord = aTextureCoord;
    vColor = color;

    gl_PointSize = 2.0;
}