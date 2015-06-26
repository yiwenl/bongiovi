// colorDots.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aColor;
// attribute vec2 aExtra;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float time;

varying vec2 vTextureCoord;
varying vec3 vColor;

void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aColor;
    vTextureCoord = aTextureCoord;

    // float size = aExtra.x + sin(aExtra.y + time) * 2.0;
    // gl_PointSize = size + 1.0;
}