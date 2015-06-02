// SimpleImageLoader.js

bongiovi = window.bongiovi || {};

(function() {
	SimpleImageLoader = function() {
		this._imgs = {};
		this._loadedCount = 0;
		this._toLoadCount = 0;
		this._scope = undefined;
		this._callback = undefined;
		this._callbackProgress = undefined;
	}

	var p = SimpleImageLoader.prototype;


	p.load = function(imgs, scope, callback, progressCallback) {
		this._imgs = {};
		this._loadedCount = 0;
		this._toLoadCount = imgs.length;
		this._scope = scope;
		this._callback = callback;
		this._callbackProgress = progressCallback;

		var that = this;

		for ( var i=0; i<imgs.length ; i++) {
			var img         = new Image();
			img.onload      = function() {	that._onImageLoaded();	}
			var path        = imgs[i];
			var tmp         = path.split("/");
			var ref         = tmp[tmp.length-1].split(".")[0];
			this._imgs[ref] = img;
			img.src         = path;
		}
	};


	p._onImageLoaded = function() {
		this._loadedCount++;

		if(this._loadedCount == this._toLoadCount) {
			this._callback.call(this._scope, this._imgs);
		} else {
			var p = this._loadedCount / this._toLoadCount;
			if(this._callbackProgress) this._callbackProgress.call(this._scope, p);
		}
	};
})();

bongiovi.SimpleImageLoader = new SimpleImageLoader();