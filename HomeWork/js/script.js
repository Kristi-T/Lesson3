//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

const fruits = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomato" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];
let names = fruits.map(item => item.name);
console.log(names);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
for (let i = 2; i <= 10; i++){
	if (i % 2 == 0) {
		console.log(i);
	}
}

//  -- 3 --
//Замініть цикл "for" на "while"
for (let k = 0; k < 5; k++) {
    console.log( `цифра ${k}!` );
}
	
let i = 0;
while (i < 5) {
	i++;
	console.log(`number ${i}!`);
}


//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let averageAge = girls.reduce((sum, item) => sum + item.age, 0) / girls.length;
console.log(averageAge);
