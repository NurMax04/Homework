//             Задача 1

// const number = Number(prompt("Ведите любое число"));
// if (number % 2 === 0) {
// 	console.log("четное число");
// } else {
// 	console.log("нечетное число");
// }

//          Задача 2

//           2.1
// const age = Number(prompt("Ведите свой возраст"));
// let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
// console.log(`Скидка ${discount}%`);

//          2.2
// const age = Number(prompt("Ведите свой возраст"));
// let discount;
// if (age < 18) {
// 	discount = 10;
// 	console.log(`Скидка ${discount}%`);
// } else if (age >= 18 && age <= 65) {
// 	discount = 20;
// 	console.log(`Скидка ${discount}%`);
// } else {
// 	discount = 30;
// 	console.log(`Скидка ${discount}%`);
// }

//           2.3
// const age = Number(prompt("Ведите свой возраст"));
// let discount;

// switch (true) {
// 	case age < 18:
// 		discount = 10;
// console.log(`Скидка ${discount}%`);
// 		break;
// 	case age >= 18 && age <= 65:
// 		discount = 20;
// 		console.log(`Скидка ${discount}%`);
// 		break;
// 	case age > 65
// 		discount = 30;
// 		console.log(`Скидка ${discount}%`);
// }

//             Задача 3
// const username = prompt("Введите имя пользователя");
// const password = prompt("Введите пароль");

// if ((username === "admin" || username === "user") && password === "123456") {
// 	console.log("Доступ разрешен");
// } else {
// 	console.log("Доступ запрещен");
// }

//              Задача 4
const weight = Number(prompt("Введите вес вашей посылки в килограммах"));
const deliveryType = prompt(
	"Введите тип доставки: Стандарт, Премиум или Экспресс",
);

if (
	deliveryType !== "Стандарт" &&
	deliveryType !== "Премиум" &&
	deliveryType !== "Экспресс"
) {
	alert("Неверный тип доставки");
} else if (weight <= 0) {
	alert("Некорректный вес посылки");
}

let price;

switch (true) {
	case weight < 1:
		price = 5;
		break;
	case weight >= 1 && weight <= 5:
		price = 10;
		break;
	case weight > 5:
		price = 15;
		break;
	default:
		price = 0;
}
alert(`Стоимость ${price}$`);

let coefficient;

switch (deliveryType) {
	case "Стандарт":
		coefficient = 1;
		break;
	case "Премиум":
		coefficient = 1.5;
		break;
	case "Экспресс":
		coefficient = 2;
		break;
	default:
		coefficient = 0;
}

let totalCost = price * coefficient;
alert(`Итоговая стоимость доставки: ${totalCost}$`);
