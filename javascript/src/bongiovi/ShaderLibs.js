"use strict";

var glslify = require("glslify");
var ShaderLibs = function() { };

ShaderLibs.shaders = {};

ShaderLibs.shaders.copyVert = glslify("../shaders/copy.vert");
ShaderLibs.shaders.copyNormalVert = glslify("../shaders/copyWithNormal.vert");

ShaderLibs.shaders.generalVert = glslify("../shaders/general.vert");
ShaderLibs.shaders.generalNormalVert = glslify("../shaders/generalWithNormal.vert");
ShaderLibs.shaders.generalWithNormalVert = glslify("../shaders/generalWithNormal.vert");

ShaderLibs.shaders.copyFrag = glslify("../shaders/copy.frag");


ShaderLibs.shaders.alphaFrag = glslify("../shaders/alpha.frag");

ShaderLibs.shaders.simpleColorFrag = glslify("../shaders/simpleColor.frag");

ShaderLibs.shaders.depthFrag = glslify("../shaders/depth.frag");

ShaderLibs.shaders.simpleCopyLighting = glslify("../shaders/simpleCopyLighting.frag");
ShaderLibs.shaders.simpleColorLighting = glslify("../shaders/simpleColorLighting.frag");



ShaderLibs.getShader = function(mId) {
	return this.shaders[mId];
};

ShaderLibs.get = ShaderLibs.getShader;
module.exports = ShaderLibs;