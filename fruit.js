class Fruit extends Elem{
	constructor(matrix,cords){ // cords двумерный массив координат
		super(matrix,cords); // адресуемся к родительским свойствам
		this.value = 'fruit'; // обоззнаяаем что это фрукт
	}
	
}