"use strict";

// const arr = [1, 2, 3, 6, 8];

// // Метод удаления последнего элемента массива

// arr.pop();

// // Метод добавления последнего элемента массива 
// arr.push(10);

// // Метод удаления первого элемента массива
// arr.shift();

// // Метод добавления элемента в начало массива 
// arr.unshift(5);

// console.log(arr);

// // Для перебора массива можно использовать обычный цикл
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // ТАКЖЕ для перебора можно использовать конструкцию for of

// for (let value of arr) {
//     console.log(value);
// }

// // Метод forEach. Создам новый массив чтобы не мешали предыдущие свойства и методы

// const arr2 = [1, 2, 3, 6, 8];

// arr2.forEach(function(item, i, arr2) {
//     console.log(`${i}: ${item} внутри массива ${arr2}`);
// });

// // Пример метода split
// const str = prompt("", "");

// const products = str.split(", ");
// console.log(products);

// // Пример метода join

// const str2 = prompt("", "");

// const products2 = str.split(", ");
// console.log(products.join("; "));

// Пример сортировки массива с числами
const arr3 = [2, 8, 6, 15];

arr3.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr3);