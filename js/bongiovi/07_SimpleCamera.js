// 07_SimpleCamera.js

(function() {
	var SimpleCamera = function(mListenerTarget) {
		this._listenerTarget = mListenerTarget || window;
		bongiovi.CameraPerspective.call(this);
		this._isLocked = false;
		this._init();
	}

	var p = SimpleCamera.prototype = new bongiovi.CameraPerspective();
	var s = bongiovi.CameraPerspective.prototype;
	var EaseNumber = bongiovi.EaseNumber;

	p._init = function() {
		this.radius 	   	= new EaseNumber(500);
		this.position[2] 	= this.radius.value;
		this.center         = vec3.create( );
		this.up             = vec3.clone( [0,-1,0] );
		this.lookAt(this.position, this.center, this.up);
		this._mouse 		= {};
		this._preMouse 		= {};
		this._isMouseDown 	= false;

		this._rx 			= new EaseNumber(0);
		this._rx.limit(-Math.PI/2, Math.PI/2);
		this._ry 			= new EaseNumber(0);
		this._preRX 		= 0;
		this._preRY 		= 0;

		this._listenerTarget.addEventListener("mousewheel", this._onWheel.bind(this));
		this._listenerTarget.addEventListener("DOMMouseScroll", this._onWheel.bind(this));

		this._listenerTarget.addEventListener("mousedown", this._onMouseDown.bind(this));
		this._listenerTarget.addEventListener("touchstart", this._onMouseDown.bind(this));
		this._listenerTarget.addEventListener("mousemove", this._onMouseMove.bind(this));
		this._listenerTarget.addEventListener("touchmove", this._onMouseMove.bind(this));
		window.addEventListener("mouseup", this._onMouseUp.bind(this));
		window.addEventListener("touchend", this._onMouseUp.bind(this));
	};

	p.lock = function(value) {
		value = value || true;
		this._isLocked = value;
	};


	p._onMouseDown = function(mEvent) {
		this._isMouseDown = true;
		getMouse(mEvent, this._mouse);
		getMouse(mEvent, this._preMouse);
		this._preRX = this._rx.targetValue;
		this._preRY = this._ry.targetValue;
	};


	p._onMouseMove = function(mEvent) {
		getMouse(mEvent, this._mouse);
		if(this._isMouseDown) {
			var diffX = this._mouse.x - this._preMouse.x;
			this._ry.value = this._preRY - diffX * .01;

			var diffY = this._mouse.y - this._preMouse.y;
			this._rx.value = this._preRX - diffY * .01;

			if(this._rx.targetValue > Math.PI * .5) this._rx.targetValue = Math
		}
	};


	p._onMouseUp = function(mEvent) {
		this._isMouseDown = false;
		getMouse(mEvent, this._mouse);
	};


	p._onWheel = function(aEvent) {
		if(this._isLocked) return;
		var w = aEvent.wheelDelta;
		var d = aEvent.detail;
		var value = 0;
		if (d){
			if (w) value = w/d/40*d>0?1:-1; // Opera
			else value = -d/3;              // Firefox;         TODO: do not /3 for OS X
		} else value = w/120; 

		// this._targetRadius -= value * 5;
		this.radius.add( -value * 5);
		
	};


	p.getMatrix = function() {
		this._updateCameraPosition();
		this.lookAt(this.position, this.center, this.up);
		return s.getMatrix.call(this);
	};


	p._updateCameraPosition = function() {
		this.position[2] 	= this.radius.value;

		this.position[1] = Math.sin(this._rx.value) * this.radius.value;
		var tr = Math.cos(this._rx.value) * this.radius.value;
		this.position[0] = Math.cos(this._ry.value + Math.PI*.5) * tr;
		this.position[2] = Math.sin(this._ry.value + Math.PI*.5) * tr;
	};


	var getMouse = function(mEvent, mTarget) {
		var o = mTarget || {};
		if(mEvent.touches) {
			o.x = mEvent.touches[0].pageX;
			o.y = mEvent.touches[1].pageY;
		} else {
			o.x = mEvent.clientX;
			o.y = mEvent.clientY;
		}

		return o;
	}

	bongiovi.SimpleCamera = SimpleCamera;

})();