"use strict";

var GLTools = require("./libs/GLTools");

function bongiovi() {
}


var lib = new bongiovi();
lib.GL = GLTools;
lib.GLTools = GLTools;
lib.glm = require("gl-matrix");


module.exports = lib;