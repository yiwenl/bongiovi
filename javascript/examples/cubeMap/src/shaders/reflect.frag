// reflect.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
// varying vec2 vTextureCoord;
uniform samplerCube texture;
varying vec3 vEye;
varying vec3 vNormal;

void main(void) {
	vec3 N = vNormal;
	vec3 V = vEye;
    gl_FragColor = textureCube(texture, reflect(V, N));
    gl_FragColor = textureCube(texture, refract(V, N, .5));
    // gl_FragColor = vec4(vEye * .5 + .5, 1.0);
}