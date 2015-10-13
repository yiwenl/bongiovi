// app.js

// window.bongiovi = require("./libs/bongiovi.min");
window.bongiovi = require("./libs/bongiovi-post");

(function() {
	var SceneApp = require("./SceneApp");
	var Dispatcher = require("./Dispatcher");

	App = function() {
		// console.log(bongiovi.post.Pass, bongiovi.post.PassGreyscale);
		if(document.body) {
			this._init();	
		} else {
			window.addEventListener('load', this._init.bind(this));
		}
	}

	var p = App.prototype;


	p._init = function() {
		var dispatcher = new Dispatcher();
		dispatcher.addEventListener("onTick", function(e){
			// console.log('on Tick : ', e.detail);
		});
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		document.body.appendChild(this.canvas);

		bongiovi.GL.init(this.canvas);
		this._scene = new SceneApp();

		bongiovi.Scheduler.addEF(this, this.loop);
	};

	p.loop = function() {
		this._scene.loop();
		// bongiovi.GL.clear(1, 0, 0, 1);
	};
})();


new App();