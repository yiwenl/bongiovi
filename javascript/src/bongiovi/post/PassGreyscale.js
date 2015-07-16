// PassGreyscale.js

"use strict";
var Pass = require("./Pass");
var glslify = require("glslify");

var PassGreyscale = function(mWidth, mHeight, mFboParams) {
	Pass.call(this, glslify("../../shaders/post/greyscale.frag"), mWidth, mHeight, mFboParams);
};

var p = PassGreyscale.prototype = new Pass();

module.exports = PassGreyscale;