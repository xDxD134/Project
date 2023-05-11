"use strict";

// методы позволяющие путешествовать по dom дереву

// 1. Метод childNodes

// console.log(document.head.childNodes); // показывает что находится в родителе


// 2. Метод document.documentElement
// console.log(document.documentElement); // показывает что находится в html

// 3. Метод fistChild 

// console.log(document.body.firstChild); // показывает первый node или узел в родителе 

console.log(document.body.firstElementChild); // показывает именно первый элемент

// 4. Метод lastChild

// console.log(document.body.lastChild); // показывает последний node или узел в родителе

console.log(document.body.lastElementChild); // показывает именно последний элемент

// Методы позволяющие отталкиваться от любых элементов

// 1. parentNode

// console.log(document.querySelector("#current").parentNode); // получили родителя кнопки с id current

console.log(document.querySelector("#current").parentNode.parentNode); // получили нод с классом wrapper используя родительские взаимоотношения

console.log(document.querySelector("#current").parentElement); // получили именно элемент

// Получение data- артибутов

console.log(document.querySelector('[data-current="3"]'));

// 2. Метод nextSibling

console.log(document.querySelector('[data-current="3"]').nextSibling); // получили следующий узел

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получили следующий элемент

// 3. Метод previousSibling

console.log(document.querySelector('[data-current="3"]').previousSibling); // получили предыдущий узел

console.log(document.querySelector('[data-current="3"]').previousElementSibling); // получили предыдущий элемент


// У childNodes нет никаких аналогов как к примеру у parentNode. Вместо этого необходимо использовать for of

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue; // пропускает одну итерацию и идет дальше
    }

    console.log(node);
}