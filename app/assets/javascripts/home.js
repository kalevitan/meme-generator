$(function () {
	var canvas = new fabric.Canvas('c');
	var imgElement = document.getElementById('red');
	var imgInstance = new fabric.Image(imgElement, {
		left: 200,
		top: 250,
		angle: 0,
		opacity: 1
	});

	canvas.add(imgInstance);


	canvas.on('mouse:down', function(options) {
	console.log(options.e.clientX, options.e.clientY);

	});
});