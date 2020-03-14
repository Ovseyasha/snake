class Helpers {

	static random(min, max){ // static это метод пренадлежит свмому классу а не объекту класса
		let dif = max - min + 1;
		return Math.floor(Math.random() * dif) + min;
	}
}