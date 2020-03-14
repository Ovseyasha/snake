class Matrix { // вместо скобок как у функции конструктор
	// ДЗ СДЕЛАТЬ МАТРИЦУ M НА N
	constructor(elem, rows = 20, cols = 20){// конструктор
		this.elem = elem; // див в котором матрица должна лежать
		// массив который хранит ячейки
		this.cells = [];
		this.rows = rows;
		this.cols = cols;
	}
	//создаем матрицу
	create(){ // методы
		for (let i = 0; i < this.rows * this.cols; i++ ){ // созадем цикал создания дивов
			let div = document.createElement('div');

			if (i % this.cols === 0 ) { // если условие выполненно то див находится в начале новой строки
				div.classList.add('row-start'); // делаем отчистку обтекания на каждой нововй строке и из за этого появляется гибкость сетки
			}
			div.setAttribute('data-game', ''); // для оформления пустых ячеек
			this.elem.appendChild(div); // внутри elem создается 400 дивов
			this.cells[i] = ''; // пыстые значения
		}
		// this.elem.style.width = (20 * this.cols) + 'px'; // нарушение абстракции ооп
	}
	// получить значеие ячейки
	getCell(x, y){ // методы
		let num = this._calcNum(x,y); // высчитывает номер 
		return this.cells[num]; // возврашаем по ключу 
	}
	// установить значение ячейки
	setCell(x, y , val){ // методы
		let num = this._calcNum(x, y);
		this.cells[num] = val;
		this.elem.children[num].setAttribute('data-game', val); // добавляем класс дочернуей ячейки elem
	}

	// пересчитать № строки и № столбца в i
	_calcNum(x, y){
		let num =  (y - 1) * this.cols + (x - 1);
		// console.log(num);
		return num;
	}
}