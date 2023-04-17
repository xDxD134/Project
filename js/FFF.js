"use strict";

// function checkAge() {
//     const userAge = prompt("Сколько вам лет?", "");
//     if (userAge >= 18) {
//         return true;
//     } else {
//         confirm("Родители разрешили?");
//     }
// }

// checkAge();




function checkAge() {
    for (let i = 1; i <= 1; i++) {
        const userAge = prompt("Сколько вам лет", "");
        let parentsPass;

        if (userAge >= 18) {
            alert("Отлично");
        } else {
            parentsPass = confirm("Родители разрешили?");
        }
        if (parentsPass == true) {
            alert("Допуск получен");

        } else if (parentsPass == false) {
            alert("Ошибка");
            i--;
        }
    }
}

checkAge();




// Также можно сравнить без if. Звучит так: Возраст больше или равно 18 или (вопрос)
// function checkAge() {
//     const userAge = prompt("Сколько вам лет?");
//     return userAge >= 18 || confirm("Родители разрешают?");
// }
// checkAge();

//  сложения числовых свойств объекта

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// умножение числовых свойств объекта
const menu = {
    width: 200,
    heidth: 300,
    title: "My menu"
};


function multiplyNumeric(menu) {

    for (let key in menu) {
        if (typeof(menu[key] === "number")) {
            menu[key] *= 2;
        }
    }
    console.log(menu);
}
multiplyNumeric(menu);