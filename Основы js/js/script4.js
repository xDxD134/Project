"use strict";

// alert("Hello"); // пример команды aleart()

// const result = confirm("Полезен ли урок?"); // пример как записывается команда confirm

// console.log(result); // пример чтобы увидеть что выбрал пользователь  

// const answer = prompt("Вам есть 18?", ""); // пример работы команды prompt

// console.log(answer);

// console.log(typeof(answer)); // пример оператора typeof

const answers = []; // пример как с помощью команды prompt можно заполнять массив 

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers); // эта команда выводим то что мы хотим на главный экран