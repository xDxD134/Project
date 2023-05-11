"use strict";
// Первый метод получения элемента со страницы. getElementsById();
const box = document.getElementById("box");

console.log(box);

// Второй метод получения элемента со стр getElemetnsByTagName();

const btns = document.getElementsByTagName("button");
const copyBtns = document.getElementsByTagName("button")[1]; // получить определенный элемент со стр
console.log(btns);
console.log(copyBtns);

const btnsCopy = document.getElementsByTagName("button");

console.log(btnsCopy[2]); // когда хотим использовать кнопку, то пишем индекс здесь

// Третий метод полчения элемента со стр getElementsByClassName();

const circles = document.getElementsByClassName("circle");
console.log(circles);

// Первый овременный метод получения элемента со стр. Метод querySelectorAll()

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => { // у такого querySelectorAll есть метод forEach
    console.log(item);
});

// Второй современный метод querySelector();

const oneHeart = document.querySelector(".heart");

console.log(oneHeart);