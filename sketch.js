let canvas;
let next;
let tv;
let redcctvs;
let info;
let bg_info;
let x = 70;
let y = 80;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	info = select('#info');
	info.style('color', 'black');
	info.position(x, y);
	info.style('font-size', '1.5em');
	info.style('font-family', 'courier');

	bg_info = select('#bg_info');
	bg_info.style('background-color', 'white');

	tv = select('#redcctvs');
	tv.position(windowWidth / 2, windowHeight / 5);
	tv.style('max-width', '100%');
	tv.style('max-height', '100%');

	tv = select('#tv');
	tv.position(windowWidth / 4, windowHeight / 2);
	tv.style('max-width', '100%');
	tv.style('max-height', '100%');

	setInterval(changePosition, 200);
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function changePosition() {
	info.position(x, y);
	x = constrain(x + random(-2, 2), 0, windowWidth);
	y = constrain(y + random(-2, 2), 0, windowHeight + 5);
}

function draw() {
	background(30);
}