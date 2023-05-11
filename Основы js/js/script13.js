"use strict";

// Объект можно записывать так:

const obj = new Object(); // обычно таким способом никогда не пользуются 

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};


// console.log(options.name);

// Оператор удаления ключа и значения прямо из объекта

// delete options.name;
// console.log(options);


// Пример перебора свойств внутри объекта с помощью for in

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// Пример если у нас внутри объекта есть объект. ЗАпускаем перебор внутри перебора

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${options} имеет значение ${options[key]}`);
//     }
// }

// Пример как вывести сколько у нас пар (ключ: значение) в объекте

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${options} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// Конструкцию выше можно очень упростить через метод Object.keys()

console.log(Object.keys(options)); // данная строка дала нам массив у которого можно узнать длину с помощью .length

console.log(Object.keys(options).length); // выводит длину массива и соответственно кол-во свойств объекта

//Пример создания метода вручную. Нужно поместить в объект ключ со значением function()
// Для этого возьму объект выше и изменю название переменной, чтобы показать пример

const opTions = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("Test");
    }
};

opTions.makeTest();

// Пример Деструктуризации объекта

const {
    height,
    width
} = opTions;
console.log(width);
console.log(height);

const {
    border,
    bg
} = opTions.colors;

console.log(border);