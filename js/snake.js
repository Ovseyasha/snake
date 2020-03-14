class Snake extends Elem{
	constructor(matrix, cords, course){
		super(matrix, cords);
		this.course = course;
		this.alive =  true;
		this.value = 'snake';
		this.newCourse = course;

		this.eating = false;
	}
	
	move(){
		if (!this.alive) {
			return;
		}
		this.eating = false;
		this.course = this.newCourse; // присваеваем новый курс для того что бы
		// this.matrix.setCell(this.x, this.y, '');// это убрать
		var head = this.cords[0].slice(); // слайс для того что бы была копия массива а не сслыка голова змеи то еслть превый масив в двумерном массиве

		var lastX = head[0]; // в массиве первый ключ это x
		var lastY = head[1]; // в массиве второй ключ это y


		switch(this.course){
			case 'up':
			head[1]--;
			break;
			case 'right':
			head[0]++;
			break;
			case 'left':
			head[0]--;
			break;
			case 'down':
			head[1]++;
			break;
		}
		// if (this.x < 1){
		// 	this.x = this.matrix.cols;
		// } 
		// if (this.x > this.matrix.cols){
		// 	this.x = 1;
		// }

		// if (this.y < 1){
		// 	this.y = this.matrix.rows;
		// } 
		// if (this.y > this.matrix.rows){
		// 	this.y = 1;
		// }

		if (!this._checkAlive(head)) { // если фуция выключен то флаг на  false
			this.alive = false;
			return;
		}

		let nowHead = this.matrix.getCell(head[0], head[1]);
	// проверка смерти и роста
		if (nowHead !== 'apple' && nowHead !== 'banana' && nowHead !== 'grapes') {
			var tail = this.cords.pop(); // .pop() удаляет плсдений элемент массива	
			this.matrix.setCell(tail[0], tail[1], ''); // убирает видимость хвоста
		}else{
			this.eating = true;
		}
		if (nowHead == 'wall' || nowHead == 'snake') {
			this.alive =  false;
			return; // для того что бы не ела дальше
		}
		
		// console.log(this.matrix.getCell(head[0], head[1]));

		

		this.cords.unshift(head); // в начала массива положить голову( которая ++ в switch
		this.matrix.setCell(head[0], head[1], 'snake');
	}
	//УБИВАТЬ ЕСЛИ НА СТЕНУ НАЕХАЛА
	_checkAlive (head){
		return head[0] >= 1 && head[0] <= this.matrix.cols && // если координаты змеи выходят за пределы карты то она останавливается
			  head[1] >= 1 && head[1] <= this.matrix.rows;
	}
}