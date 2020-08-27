function Enemy() {
	this.x = canvaswidth / 2;
	this.y = canvas.height / 2;
	this.xSpeed = scale*1;
	this.ySpeed = 0;

	this.draw = function() {
		context.fillStyle = "#0000ff";
		context.fillRect(this.x, this.y, scale, scale);

	}
	this.update = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (this.x > canvaswidth) {
			this.x = 0;
		}
		if (this.y > canvas.height) {
			this.y = 0;
		}
		if (this.x < 0) {
			this.x = canvaswidth;
		}
		if (this.y < 0) {
			this.y = canvas.height;
		}
	}
}