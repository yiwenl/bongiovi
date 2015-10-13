// Dispatcher.js

function Dispatcher() {
	this.count = 0;
	bongiovi.Scheduler.addEF(this, this.loop, null, 1000);
}


var p = Dispatcher.prototype = new bongiovi.EventDispatcher();


p.loop = function() {
	this.dispatchCustomEvent("onTick", this.count++);
};


module.exports = Dispatcher;