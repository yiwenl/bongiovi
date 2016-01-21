// GLTool.js

import glm from 'gl-matrix';

class GLTool {
	constructor() {
		this.canvas;
	}


	init(mCanvas, mParameters = {}) {
		if(this.canvas !== undefined) {
			this.destroy();
		}

		this.canvas = mCanvas;
		console.log('Parameters : ', mParameters);
	}


	destroy() {
		this.canvas = null;
		if(this.canvas.parentNode) {
			try {
				this.canvas.parentNode.removeChild(this.canvas);
			} catch (e) {
				console.log('Error : ', e);
			}
		}
	}
}

let GL = new GLTool();

export default GL;
