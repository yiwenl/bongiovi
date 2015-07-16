// ViewRgbSeparate.js

var GL, gl;
var glslify = require("glslify");

function ViewRgbSeparate() {
	GL = bongiovi.GL;
	bongiovi.ViewCopy.call(this, null, glslify("../shaders/rgb.frag"));
}

var p = ViewRgbSeparate.prototype = new bongiovi.ViewCopy();
p.constructor = ViewRgbSeparate;

module.exports = ViewRgbSeparate;