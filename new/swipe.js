document.addEventListener('swiped-left', function(e) {
     console.log(e.type);
     console.log(e.target);
     snake.xSpeed = scale*-1;
	 snake.ySpeed = 0;	
});
document.addEventListener('swiped-right', function(e) {
     console.log(e.type);
     console.log(e.target);
     snake.xSpeed = scale*1;
     snake.ySpeed = 0;
});
document.addEventListener('swiped-up', function(e) {
     console.log(e.type);
     console.log(e.target);
        snake.xSpeed = 0;
        snake.ySpeed = scale*-1;
});
document.addEventListener('swiped-down', function(e) {
     console.log(e.type);
     console.log(e.target);
        snake.xSpeed = 0;
        snake.ySpeed = scale*1;
});