(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 560,
	height: 315,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/capture20190425105100.png", id:"capture20190425105100"}
	]
};



// symbols:



(lib.capture20190425105100 = function() {
	this.initialize(img.capture20190425105100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,657);


// stage content:
(lib._2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.capture20190425105100();
	this.instance.setTransform(0,0,0.41,0.479);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(280,157.5,560,315);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;