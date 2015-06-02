"use strict";

var GLTools = require("./bongiovi/GLTools");

var bongiovi = {
	GL:GLTools,
	GLTools:GLTools,
	Scheduler:require("./bongiovi/Scheduler"),
	EaseNumber:require("./bongiovi/EaseNumber"),
	QuatRotation:require("./bongiovi/QuatRotation"),
	Scene:require("./bongiovi/Scene"),
	Camera:require("./bongiovi/Camera"),
	SimpleCamera:require("./bongiovi/SimpleCamera"),
	CameraPerspective:require("./bongiovi/CameraPerspective"),
	Mesh:require("./bongiovi/Mesh"),
	Face:require("./bongiovi/Face"),
	GLShader:require("./bongiovi/GLShader"),
	GLTexture:require("./bongiovi/GLTexture"),
	ShaderLibs:require("./bongiovi/ShaderLibs"),
	View:require("./bongiovi/View"),
	ViewCopy:require("./bongiovi/ViewCopy"),
	ViewAxis:require("./bongiovi/ViewAxis"),
	MeshUtils:require("./bongiovi/MeshUtils"),
	glm:require("gl-matrix")
};

module.exports = bongiovi;