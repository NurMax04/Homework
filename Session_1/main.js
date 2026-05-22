const firstName = "Nurik";
const lastName = "Kobey";
const isStudent = true;

const age = 22;
const currentYear = 2026;
const birthYear = currentYear - age;
console.log(birthYear);

const massage = `Меня зовут ${firstName} ${lastName}, мне ${age}. Я ученик школы Aroken.ru: ${isStudent}. `;

console.log(massage);

let a = Number("123");
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);
