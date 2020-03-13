window.onload = function(e) {
	var div = document.querySelector('.fields');// берем див  в котором будет матрийца
	var matrix = new Matrix(div, 8, 8); // инициализируем матрицу
	matrix.create(); // вызываем метод создания

	var fruit = new Fruit (matrix, [[5,7]]); // создание фруктов
	fruit.show();

	var wall = new Wall (matrix, [[2,2], [3,2], [4,2]]); // создание стены
	wall.show();

	var snake = new Snake(matrix, [[5,5], [4,5], [3,5]], 'right');
	snake.show();


	addEventListener("keydown", function(event) {
		// console.log(event.keyCode);
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
	// setInterval(() => {
	// 	snake.move();
	// }, 500);

	let timer = setInterval(() => {
		snake.move();

		if (!snake.alive) {
			clearInterval (timer);
			alert('gameover');
		}
	}, 500);
};
