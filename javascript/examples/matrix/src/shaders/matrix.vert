// colorDots.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float time;

varying vec2 vTextureCoord;

void main(void) {

	float s = sin(time);
    float c = cos(time);
    
    mat4 mTranslate = mat4(	1.0, 0.0, 0.0, 0.0,
    						0.0, 1.0, 0.0, 0.0,
    						0.0, 0.0, 1.0, 0.0,
    						c*50.0, s*50.0, s*c*50.0, 1.0 );


    mat4 mRotate = mat4(	  c,  -s, 0.0, 0.0,
    						  s,   c, 0.0, 0.0,
    						0.0, 0.0, 1.0, 0.0,
    						0.0, 0.0, 0.0, 1.0 );

    // gl_Position = uPMatrix * uMVMatrix * mTranslate * vec4(aVertexPosition, 1.0);
    // gl_Position = uPMatrix * uMVMatrix * mRotate * vec4(aVertexPosition, 1.0);
    // gl_Position = uPMatrix * uMVMatrix * mRotate * mTranslate * vec4(aVertexPosition, 1.0);
    gl_Position = uPMatrix * uMVMatrix * mTranslate * mRotate * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
}