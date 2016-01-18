// hdr.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

uniform float exposure;

void main(void) {
    gl_FragColor = texture2D(texture, vTextureCoord);
    gl_FragColor.rgb *= exposure;
}