"use strict";

var gl,GL = require("../GLTools");
var ViewCopy = require("../ViewCopy");
var FrameBuffer = require("../FrameBuffer");

var Pass = function(mParams, mWidth, mHeight, mFboParams) {
	mWidth = mWidth === undefined ? 512 : mWidth;
	mHeight = mHeight === undefined ? 512 : mHeight;
	gl = GL.gl;
	if(!mParams) {	return;	}
	if( (typeof mParams) === "string") {
		this.view = new ViewCopy(null, mParams);
	} else {
		this.view = mParams;
	}

	this.width = mWidth;
	this.height = mHeight;
	this._fboParams = mFboParams;

	this._init();
};

var p = Pass.prototype;


p._init = function() {
	this._fbo = new FrameBuffer(this.width, this.height, this._fboParams);
	this._fbo.bind();
	GL.setViewport(0, 0, this._fbo.width, this._fbo.height);
	GL.clear(0, 0, 0, 0);
	this._fbo.unbind();
	GL.setViewport(0, 0, GL.canvas.width, GL.canvas.height);

};


p.render = function(texture) {
	this._fbo.bind();
	GL.setViewport(0, 0, this._fbo.width, this._fbo.height);
	GL.clear(0, 0, 0, 0);
	this.view.render(texture);
	this._fbo.unbind();
	GL.setViewport(0, 0, GL.canvas.width, GL.canvas.height);

	return this._fbo.getTexture();
};

p.getTexture = function() {
	return this._fbo.getTexture();
};

p.getFbo = function() {
	return this._fbo;
};

module.exports = Pass;