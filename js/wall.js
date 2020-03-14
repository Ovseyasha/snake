class Wall extends Elem{
	constructor(matrix,cords){ // cords двумерный массив координат
		super(matrix,cords); // адресуемся к родительским свойствам
		this.value = 'wall'; // обоззнаяаем что это фрукт
	}
	
}