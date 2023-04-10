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

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}