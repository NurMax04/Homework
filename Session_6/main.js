//                     Задача 1
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

console.log(users);

users.push({ name: "Ann", age: 19, isAdmin: false });
users.push({ name: "Jack", age: 43, isAdmin: true });

//                  Задача 2

const getUserAverageAge = users => {
	let totalAge = 0;

	for (const user of users) {
		totalAge += user.age;
	}

	const averageAge = totalAge / users.length;

	return averageAge;
};

console.log(`Средний возраст у пользователей: ${getUserAverageAge(users)}`);

//                         Задача 3

const admins = [];

const getAllAdmins = users => {
	for (const user of users) {
		if (user.isAdmin) {
			admins.push(user.name);
		}
	}
	return admins;
};

console.log(getAllAdmins(users));

//                         Задача 4

const arr = [10, 20, 30];

const first = (arr, n) => {
	if (n === 0) {
		return [];
	} else if (n === undefined) {
		return [arr[0]];
	}
};
console.log(first(arr));
