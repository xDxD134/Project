"use strict";

// Простой пример свойства  
// const str = "test";

// console.log(str.length);

// Пример длинны массива с помощью свойства .length

const arr = [1, 2, 3];

console.log(arr.length);

// Пример получения части строки через индекс

// const str = ("test");

// console.log(str[2]);

// Пример метода toUpperCase() - изменяет регистор (верхний регистр)

// const str = "test";

// console.log(str.toUpperCase());
// console.log(str);

// Пример метода toLowerCase() - делает нижний регистр строки

const str = "TEST";

console.log(str.toLowerCase());
console.log(str);

// Пример метода indexOf - метод позволяющий нати кусочек строки и сказать с какого индекса начинается

const fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf("q")); // также используется для поиска значения в строке

// Пример метода slice()

const logg = "Hello world";

console.log(logg.slice(6, 11)); // в консоле слово world
console.log(logg.slice(6, 10)); // в консоле слово worl . Аргумент end говорит До какого то момента но не включая его
console.log(logg.slice(6)); // строка обрезается с индека 6 и до конца

// Пример метода substring()

console.log(logg.substring(6, 11));

// Пример метода substr()

console.log(logg.substr(6, 5));