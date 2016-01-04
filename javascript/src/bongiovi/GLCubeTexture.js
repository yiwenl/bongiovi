"use strict";

var gl;
var GL = require("./GLTools");
var GLTexture = require("./GLTexture");

var GLCubeTexture = function(sources, options) {
	
	var isGLTexture = false;
	if(sources[0] instanceof GLTexture) {
		isGLTexture = true;
	}
	// [posx, negx, posy, negy, posz, negz]
	options = options || {};
	gl = GL.gl;
	this.texture = gl.createTexture();
	
	this.magFilter = options.magFilter || gl.LINEAR;
	this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
	this.wrapS     = options.wrapS || gl.CLAMP_TO_EDGE;
	this.wrapT     = options.wrapT || gl.CLAMP_TO_EDGE;

	gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
	var targets = [
		gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 
		gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 
		gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z 
	];

	for (var j = 0; j < 6; j++) {
		if(isGLTexture) {
			console.log('Texture : ', sources[j].texture);
			// gl.texImage2D(targets[j], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sources[j].texture);
			// gl.copyTexImage2D(targets[j], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sources[j].texture);
		} else {
			gl.texImage2D(targets[j], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sources[j]);	
		}
	    
	    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, this.wrapS);
	    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, this.wrapT);
	    gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
	}
	

	gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
};

var p = GLCubeTexture.prototype;


p.bind = function(index) {
	if(index === undefined) {index = 0;}
	if(!GL.shader) {return;}

	gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
	gl.uniform1i(GL.shader.uniformTextures[index], index);
	this._bindIndex = index;
};


p.unbind = function() {
	gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);	
};

p.destroy = function() {
	gl.deleteTexture(this.texture);
};

module.exports = GLCubeTexture;