"use strict";

// to string

// 1)     String

console.log(typeof (String(null))); // в консоле string

console.log(typeof (String(4))); // все равно в консоле string

// 2)      Конкатинация 

console.log(typeof (String(4 + ""))); // в консоле string

// Реальный пример. Необходимо указать стили (стили передаются в строках)

const fontSize = 26 + "px";

console.log(typeof (fontSize));


// to Number

// 1)

console.log(typeof (Number("Hello"))); // в консоле number

// 2) Унарный плюс 

console.log(typeof (Number(+"hello")));

// 3)  Метод parseInt();

console.log(typeof (parseInt("15px", 10)));
// В реальных проектах используется унарный плюс
let answer = +prompt("", "");


// To Boolean

// 1) Нативный способ. Значения которые всегда превращаются в false. это 0, "", null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// 2) С помощью команды Boolean()

console.log(typeof (Boolean(4)));

// 3) Если поставить два знака отрицания !!

console.log(typeof (!!4));