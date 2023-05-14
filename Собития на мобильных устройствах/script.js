"use strict";

// touchstart - срабатывает при касании пальца
// touchmove - срабатывает когда палец касается элемента и начинает двигаться по немуэ
// touchend - срабатывает как только палец оторвался от элемента
// touchenter - срабатывает когда палец скользит по экрану и наскальзывает на элемент
// touchleave - противоположное событие, срабатывает когда палец не оторвался от экрана, а продолжил скольжение
// touchcancel - возникает когда точка соприкосновения больше не регестрируется, например палец покинул пределы браузера 

window.addEventListener("DOMContentLoaded", (e) => {

    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();

        console.log("Start");
        console.log(e.targetTouches);
    });

    box.addEventListener("touchmove", (e) => {
        e.preventDefault();

        console.log("Move");
    });

    box.addEventListener("touchend", (e) => {
        e.preventDefault();

        console.log("End");
    });


});

// Свйоста объекта событий (event) при работе с сенсорными устройствами

// touches - показывает список всех пальцев которые взаимодействуют с экраном
// targetTouches - показывает список всех пальцев которые взаимодействуют именно с этим элементом
// changedTouches - показывает список пальцев которые учавствуют в текущем событии