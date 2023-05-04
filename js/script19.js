"use strict";

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
box.style.width = "500px";

box.style.cssText = "background-color: green; width: 500px"; // можно изменить стиль таким способом 

btns[0].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// Смена стиля для всех элементов с помощью цикла
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

// Чаще всего используют forEach
// hearts.forEach((item) => {
//     item.style.backgroundColor = "blue";
// });

// Также можно сделать с помощью for of

// for (let value of circles) {
//     value.style.backgroundColor = "red";
// }


// Основные методы для работы с элементами на стр

// 1. Создание элемента который существует только в js

const div = document.createElement("div");

// 2. Создание текстого узла

const text = document.createTextNode("Я тут был"); // данный метод используется редко

// 3. Зададим стиль для элемента из css стилей

div.classList.add("black");

// 3. Добавим элемент в конец тега body

document.body.append(div);
// document.body.appendChild(div); // Устаревший вариант, лучше использовать append()

// НЕБОЛЬШОЕ ОТСУПЛЕНИЕ. дРУГОЙ СПОСОБ ПОЛУЧЕНИЯ ЭЛЕМЕНТА СО СТР

// document.querySelector(".wrapper").append(div); // такой метод используется если элемент будет использоваться один раз

// 4. Добавим элемент в начало родителя

// document.body.prepend(div); // добавляет элемент в начало тега body

// wrapper.prepend(div); // добавляет элемент в начало оболочки wrapper

// 5. Метод before() - вставляет элемент перед каким то элементом

// hearts[0].before(div); // вначале пишем перед каким элементом вставить div

// 6. Метод after() - вставляет элемент после какого - то жлемента 

// hearts[0].after(div);

// 7. Метод удаления элемента со стр. Метод remove()

// circles[0].remove();

// 8. Метод замены одного элемента на другой. Метод replaceWith()

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]); // устаревший вариант replaceWith

// Устаревшие методы, но часто встречающиеся в коде

// 9. Метод insertBefore() - переводится как вставить перед // устаревший вариант prepend, before, after

// wrapper.insertBefore(div, hearts[1]); // div -элемент который вставляем, hearts[0] - перед каким элементом

// 10. Метод removeChild() - устаревший вариант remove()

// wrapper.removeChild(hearts[2]); // в скобках тот элемент который хотим удалить

// Редактирование элемента

// 1. Дли вставки текста есть команда innerHTML - 1 способ

// div.innerHTML = "Hello World";

// С помощью этой команды можно передать HTML структуру

div.innerHTML = "<h1>Hello World</h1>";

// 2. Для вставки текста есть команда textContent - 2 способ

// div.textContent = "hello"; // можно вставить только текст



// Метод insertAdjancentHTML() - вставляет HTML код перед, после, в начало и конец элемента

// 1.

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // вставляет перед элементом

// 2.

// div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // вставляет в начале элемента

// 3.

// div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // вставляет в конец элемента

// 4.

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // вставляет после элемента