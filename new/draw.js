const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

const canvaswidth = canvas.width;

var snake;

(function setup() {
	snake = new Snake();
	enemy = new.Enemy();
	fruit = new Fruit();
	snake.draw();
	enemy.draw();
	fruit.pickLocation();

	fruit.pickLocation();
	window.setInterval(() => {
		fruit.draw();
		context.clearRect(0, 0, canvas.width, canvas.height);
		enemy.update();
		enemy.draw();
		snake.update();
		snake.draw();
	},75);
}());
window.addEventListener('keydown', ((evt) => {
	console.log(evt);
	const direction = evt.key.replace('Arrow', '');
	snake.changeDirection(direction);
}))
