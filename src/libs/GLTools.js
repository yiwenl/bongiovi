// GLTools.js
"use strict";

function GLTool() {
	this.aspectRatio   = 1;
	this.fieldOfView   = 45;
	this.zNear         = 5;
	this.zFar          = 3000;

	this.canvas        = null;
	this.gl            = null;

	this.shader        = null;
	this.shaderProgram = null;
}

var p = GLTool.prototype;

p.init = function(mCanvas, mWidth, mHeight, parameters) {
	this.canvas      = mCanvas || document.createElement("canvas");
	var params       = parameters || {};
	params.antialias = true;
	this.gl          = this.canvas.getContext("experimental-webgl", params);
	
	if(mWidth !== undefined && mHeight !== undefined) {
		this.setSize(mWidth, mHeight);
	} else {
		this.setSize(window.innerWidth, window.innerHeight);	
	}

	this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.enable(this.gl.BLEND);
	this.gl.clearColor( 0, 0, 0, 1 );
	this.gl.clearDepth( 1 );

	// this.matrix = mat4.create();
	// mat4.identity(this.matrix);
	// this.normalMatrix = mat3.create();
	this.depthTextureExt 		= this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
	this.floatTextureExt 		= this.gl.getExtension("OES_texture_float"); // Or browser-appropriate prefix
	this.floatTextureLinearExt 	= this.gl.getExtension("OES_texture_float_linear"); // Or browser-appropriate prefix
	// this.enableAlphaBlending();
};



module.exports = new GLTool();