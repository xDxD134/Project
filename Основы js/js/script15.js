"use strict";
// Первый способ создания копии объекта (через цикл)
function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.b = 10;
console.log(numbers);
console.log(newNumbers);

// Второй способ создания копии (с помощью метода Oject.assign();)

const obj = {
    name: "Ilya",
    age: 25
};

const add = {
    isMarried: true
};

const newObj = Object.assign(obj, add);

// Создание копии объекта уже соедененного (с помощью оставления пустых {} в 1 аргументе)

const objNew = Object.assign({}, obj);

objNew.age = 26;

console.log(obj);
console.log(objNew);

// Создание копии массива (с помощью метода slice)

const oldArray = ["a", "b", "c", "d", "e"]; // создаем массив

const newArray = oldArray.slice(); // копируем массив при помощи метода slice

console.log(oldArray);
console.log(newArray);

// Работа оператора Spread

const video = ["youtube", "vimeo", "rutube"], // создали массив
    blogs = ["wordpress", "livejournal", "blogger"], // создали второй массив
    internet = [...video, ...blogs, "vk"]; //с помощью Spread развернули массивы и поместили данные в массив internet

console.log(internet);

// Работа Spread на примере посложнее

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// Четвертый способ создание копии для массива с помощью Spread

const array = ["a", "b"];

const newAaray = [...array]; // создали копию массива

// Создании копии объекта с помощью Spread

const q = {
    one: 1,
    two: 2
};

const newQ = {...q }; // создали компию объекта