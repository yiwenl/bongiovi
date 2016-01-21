// console.log('here', bongiovi, bongiovi.glm);

window.addEventListener('load', ()=>_init());


function _init() {
	console.debug('INIT');
	let canvas = document.createElement("canvas");

	document.body.appendChild(canvas);

	bongiovi.GL.init(canvas);	
}