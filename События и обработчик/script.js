"use strict";

// Использование свойства DOM дерева для событий

const btn = document.querySelector("button");

// btn.onclick = function () {
//     alert("Ok!");
// };

// Метод addEventListener()

// btn.addEventListener("click", () => {
//     alert("OK");
// });

// btn.addEventListener("click", () => {
//     alert("Good");
// });

// Специальный объект event

// btn.addEventListener('mouseenter', (event) => {
//     // console.log(event);
// });

// Пример возможности event

// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });

// Удаление события с помощью removeEventListener()

// const deleteElement = (e) => { // вынес функцию из addEventListener в отдельную переменную
//     e.target.remove();
// };

// btn.addEventListener('click', deleteElement); // работает точно также как и пример выше
// btn.removeEventListener('click', deleteElement); // на стр ничего не будет происходить, т.к. мы создали событие и тут же его удалили



// Использование removeEventListener на реальном проекте

// let i = 0; // установили значение 0

// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener("click", deleteElement); // после того как i достигнет 1 удаляем событие
//     }

// };

// btn.addEventListener("click", deleteElement);

// Метод отменяющий стандартное поведение браузера. preventDefault()

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target);
});

// Пример третьего аргумента в методе addEventListener. Третьим аргументом передается опция 

const deleteElement = (e) => {
    console.log(e.target);


};

btn.addEventListener("click", deleteElement, {
    once: true // опция once говорит что мы будем использовать обработчик 1 раз
});