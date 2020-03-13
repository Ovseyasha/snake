window.onload = function(e) {
	var div = document.querySelector('.fields');// берем див  в котором будет матрийца
	var matrix = new Matrix(div, 15, 15); // инициализируем матрицу
	matrix.create(); // вызываем метод создания

	var fruit = new Fruit (matrix, [[5,7],[6,2], [7,3], [7,1]]); // создание фруктов
	fruit.show();


	var wall = new Wall (matrix, [[2,2], [3,2], [4,2]]); // создание стены
	wall.show();

	var snake = new Snake(matrix, [[3,1], [2,1], [1,1]], 'right');
	snake.show();


	addEventListener("keydown", function(event) {
		// console.log(event.keyCode);
		if (snake.course == 'left') {
			if(event.keyCode == 39){
				return false;
			}
		}
		if (snake.course == 'up') {
			if(event.keyCode == 40){
				return false;
			}
		}
		if (snake.course == 'right') {
			if(event.keyCode == 37){
				return false;
			}
		}
		if (snake.course == 'down') {
			if(event.keyCode == 38){
				return false;
			}
		}
		switch (event.keyCode) {
			case 37:
				snake.course = 'left';
				break;
			case 38:
				snake.course = 'up';
				break;
			case 39:
				snake.course = 'right';
				break;
			case 40:
				snake.course = 'down';
				break;
		}
	});
	var p = 0;
	let timer = setInterval(() => {
		snake.move();

		if (!snake.alive) {
			clearInterval (timer);
			alert('gameover');
		}
		
		if (snake.eating) {
			p++;
			document.querySelector('.points').innerHTML = p;
			var x = Math.floor(Math.random() * (matrix.cols - 1 + 1)) + 1; // x
			var y = Math.floor(Math.random() * (matrix.rows - 1 + 1)) + 1; // y
			let nowHead = matrix.getCell(x,y);
			if (nowHead !== 'apple' && nowHead !== 'banana' && nowHead !== 'grapes' && nowHead !== 'wall' && nowHead !== 'snake'){
				(new Fruit (matrix, [[x,y]])).show();	
			}
		}
		
	}, 400);
};
