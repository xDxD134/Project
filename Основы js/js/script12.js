"use strict";

// В браузерах бывает задержка, для того чтобы исскуственно ее созда используется код setTimeout(function())
// синтаксис использования 
function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// CALL BACK Функции 

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS("JS", function() {
    console.log("Я прошел этот урок");
});

// Пример не анонимной функции в learnJS

function done() {
    console.log("Я прошел этот урок");
}

learnJS("javaScript", done);