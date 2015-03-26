precision highp float;
varying vec3 vNormal;
varying vec3 vVertexPosition;
varying vec3 vViewDirection;

uniform sampler2D texture;
varying vec3 eye;

void main(void) {
	vec3 color            	= vNormal;

	vec3 r = reflect( eye, vNormal );
    float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
    vec2 vN = r.xy / m + .5;

    vec3 base = texture2D( texture, vN ).rgb;

	color = vNormal * .5 + vec3(.5);
    gl_FragColor = vec4(color, 1.0);
    gl_FragColor = vec4( base, 1. );
}