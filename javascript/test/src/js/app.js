// app.js

(function() {
	var bongiovi = require("./libs/bongiovi");
	var SceneApp = require("./SceneApp");

	App = function() {
		if(document.body) {
			this._init();	
		} else {
			window.addEventListener('load', this._init.bind(this));
		}
	}

	var p = App.prototype;


	p._init = function() {
		console.log('Init');

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