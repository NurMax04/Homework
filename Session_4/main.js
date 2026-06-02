//                     Задача 1

function calculateFinalPrice(price, discount, tax) {
	const discountAmount = (price * discount) / 100;
	const discountedPrice = price - discountAmount;
	const taxAmount = discountedPrice * tax;
	const finalPrice = discountedPrice + taxAmount;
	return finalPrice;
}
console.log(calculateFinalPrice(100, 10, 0.2));

//                     Задача 2

const checkAccess = (userName, password) => {
	if (userName === "admin" && password === 123456) {
		return "Доступ разрешен";
	}
	return "Доступ запрещен";
};
console.log(checkAccess("admin", 123456));

//                     Задача 3

const getTimeOfDay = hour => {
	if (hour >= 0 && hour <= 5) {
		return "Ночь";
	} else if (hour >= 6 && hour <= 11) {
		return "Утро";
	} else if (hour >= 12 && hour <= 17) {
		return "День";
	} else if (hour >= 18 && hour <= 23) {
		return "Вечер";
	} else return "Некорректное время ";
};
const hour = +prompt("Введите время");
console.log(getTimeOfDay(hour));

//                     Задача 4

const findFirstEven = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Четных чисел нет";
};

const start = +prompt("Введите первое число");
const end = +prompt("Введите последнее число");
console.log(findFirstEven(start, end));
