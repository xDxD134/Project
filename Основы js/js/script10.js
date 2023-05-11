"use strict";
                                    // Синтаксис функций
// function showFirstMessage() {
//     console.log("Hello World!");
// }

// showFirstMessage();

                                    // Пример функции аргументов может быть бесконечно кол-во. Задаются через запятую

// function showFirstMessage(text) {
//     console.log(text);
// }                     

// showFirstMessage("Hello Wrold");

                                    // Пример глобальной переменной 
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World");
console.log(num);

                                    // Пример функции с return 

// function calc(a, b) {
//     return(a + b);
// }
// console.log(calc(3, 4)); // выдаст 4
// console.log(calc(7, 8)); // выдаст 15 --> функцию можно использовать много раз с другими переменными

                                    // Пример еще одной возможности return
function ret() {
    let num = 50;

    // может быть огромный код 

    return num;
}
    
    const anotherNum = ret(); // в переменную помещаем результат функции
    console.log(anotherNum);

                                    // Function Declaration

// console.log(calc(3, 4));
// console.log(calc(3, 6));
// console.log(calc(5, 4));

// function calc(a, b) {
//     return (a + b);
// }                

                                    // Function Expression

let logger = function() {
    console.log("Hello");
};

logger();

                                    // Стрелочные функции

const calc = (a, b) => a + b;  // можно записать так

console.log(calc(3, 3));

const calcu = (a, b) => {    // записывается когда код внутри функции разрастается 
    console.log(1);
    return (a + b);
};

console.log(calcu(4, 4)); 