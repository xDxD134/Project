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