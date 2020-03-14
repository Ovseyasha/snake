class Fruit extends Elem{
	constructor(matrix,cords){ // cords двумерный массив координат
		super(matrix,cords); // адресуемся к родительским свойствам
		
		let flag =Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
		if (flag == 1) {
			this.value = 'apple';
		}
		if (flag == 2) {
			this.value = 'banana';
		}
		if (flag == 3) {
			this.value = 'grapes';
		}
		// this.value = 'fruit'; // обоззнаяаем что это фрукт
	}

	
}
