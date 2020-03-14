window.onload = function(e) {
	let div = document.querySelector('.fields');// берем див  в котором будет матрийца
	let matrix = new Matrix(div, 20, 20); // инициализируем матрицу
	matrix.create(); // вызываем метод создания

	(new Fruit (matrix, [[5,7],[6,2], [7,3], [7,1]])).show();// создание фруктов
	
	let wall = new Wall (matrix, [[2,2], [3,2], [4,2]]); // создание стены
	wall.show();

	let snake = new Snake(matrix, [[3,1]], 'right');
	snake.show();


	addEventListener("keydown", function(event) {
		switch (event.keyCode) {
			case 37:
				if (snake.course !== 'right') {
					snake.newCourse = 'left';
				}
				break;
			case 38:
				if (snake.course !== 'down') {
					snake.newCourse = 'up';
				}
				break;
			case 39:
				if (snake.course !== 'left') {
					snake.newCourse = 'right';
				}
				break;
			case 40:
				if (snake.course !== 'up') {
					snake.newCourse = 'down';
				}
				break;
		}
	});
	let score = 0;
	let timer = setInterval(() => {
		snake.move();

		if (!snake.alive) {
			clearInterval (timer);
			let p = new Popup();
			// let btn = '<div><button type="button" class="restart">Заново</button></div>'
			p.open('<p>GAME OVER</p>' + ' <span>your Score: ' + document.querySelector('.points').innerHTML + '</span>' ); //откроет окно и покажет содержимое
		}
		
		if (snake.eating) {
			score++;
			document.querySelector('.points').innerHTML = score;

			let x;
			let y;
			do{
				x = Helpers.random(1, matrix.cols);
				y = Helpers.random(1, matrix.rows);
			}
			while(matrix.getCell(x, y) !== '');

			(new Fruit (matrix, [[x,y]])).show();	
			// while(matrix.getCell(x, y) !== ''){
			// 	x = Helpers.random(1, matrix.cols);
			// 	y = Helpers.random(1, matrix.rows);
			// }
		}
		
	}, 200);
	// let button = document.querySelector('.restart');
	// // console.log(button);
	// button.addEventListener('click', function () {
	// 	window.location.reload();
	// });
};


function Popup() {
  this.popup = document.querySelector('.popup');
  this.overlay = document.querySelector('.overlay');

  var overlay = this.overlay;
  var popup = this.popup;
  this.open = function (content) {
    this.popup.style.display = 'block';
    this.popup.innerHTML += content;
    this.overlay.style.display = 'block';
  };
  this.close = function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  };
  overlay.onclick = this.close;
}
