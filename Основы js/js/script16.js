"use strict";

let str = "some";

let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

// Первый способ установления прототипа с помощью __proto__ (устаревший способ) 

const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john.armor);

// Второй способ установления прототипа с помощью Object.setPrototypeOf();

Object.setPrototypeOf(john, soldier);

// Третий способ установления прототипно наследственной связи с помощью  Object.creare();

const boris = Object.create(soldier);