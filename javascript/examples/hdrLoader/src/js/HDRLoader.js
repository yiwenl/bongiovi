// HDRLoader.js

var parseHDR = require("parse-hdr");

function HDRLoader() {
	this._req = new XMLHttpRequest();
	this._req.addEventListener('load', this._onLoad.bind(this));
	this._req.addEventListener('progress', this._onProgress.bind(this));
	this._req.responseType = 'arraybuffer';
}

var p = HDRLoader.prototype;


p.load = function(url, callback) {
	this._req.open('GET', url);
	this._req.send();

	this._callback = callback;
};


p._onLoad = function(e) {
	var hdrInfo = parseHDR(e.target.response);

	if(this._callback) {
		this._callback(hdrInfo);
	}

	this._callback = null;
};

p._onProgress = function(e) {
	var p = e.loaded/e.total * 100;
	console.log('on Progress : ', p.toFixed(2));
};


module.exports = HDRLoader;