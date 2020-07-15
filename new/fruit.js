function Fruit() {
	this.x;
	this.y;

	this.pickLocation = function(){
		this.x =(Math.floor(Math.random() * rows - 1) + 1) * scale;
	}
	this.draw = function(){
		context.fillStyle = 'ffffff';
		context.fillRect(this.x, this.y, scale, scale);
	}
}