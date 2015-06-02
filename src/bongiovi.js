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
	glm:require("gl-matrix")
};

module.exports = bongiovi;