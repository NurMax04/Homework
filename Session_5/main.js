//                Задача 1

const person = {
	name: "Nura",
	surName: "Kobey",
	age: 21,
	placeOfStudy: "Aroken.ru",
	isFrom: "Kazakhstan",
};
console.log(person);

//                Задача 2

const user = {
	// name: "Nura",
};

const isEmpty = user => {
	for (let key in user) {
		return false;
	}
	return true;
};
console.log(isEmpty(user));

//                Задача 3

const task = {
	title: "Домашняя работа",
	description: "Учить JS",
	isCompleted: false,
};

const modifications = {
	isCompleted: true,
};

const cloneAndModify = (object, modifications) => {
	const newObject = {
		...object,
		...modifications,
	};
	return newObject;
};

const result = cloneAndModify(task, modifications);

for (let key in result) {
	console.log(`${key}:`, result[key]);
}

//                       Задача 4

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

const callAllMeMethods = object => {
	for (let key in object) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
};

callAllMeMethods(myObject);
