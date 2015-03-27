precision highp float;
varying vec3 vNormal;
varying vec3 vVertexPosition;
varying vec3 vViewDirection;

uniform sampler2D texture;
uniform sampler2D textureLight;
varying vec3 eye;


float contrast(float mValue, float mScale, float mMidPoint) {
	return clamp( (mValue - mMidPoint) * mScale + mMidPoint, 0.0, 1.0);
}

float contrast(float mValue, float mScale) {
	return contrast(mValue,  mScale, .5);
}

vec3 contrast(vec3 mValue, float mScale, float mMidPoint) {
	return vec3( contrast(mValue.r, mScale, mMidPoint), contrast(mValue.g, mScale, mMidPoint), contrast(mValue.b, mScale, mMidPoint) );
}

vec3 contrast(vec3 mValue, float mScale) {
	return contrast(mValue, mScale, .5);
}


void main(void) {
	vec3 color            	= vNormal;

	vec3 r = reflect( eye, vNormal );
    float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
    vec2 vN = r.xy / m + .5;

    vec3 base = texture2D( texture, vN ).rgb;
    vec3 baseLight = texture2D( textureLight, vN ).rgb;
    baseLight = contrast(baseLight, 4.0, .75);

	color = vNormal * .5 + vec3(.5);
    gl_FragColor = vec4(color, 1.0);
    gl_FragColor = vec4( base + baseLight * .5, 1. );
}