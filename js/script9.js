"use strict";

let num = 50;

// while (num <= 55) {                          // Пример цикла while (пока что)
//         console.log(num);
//         num++;
// }

// do {
//         console.log(num);
//         num++;                                // Пример цикла do while
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
        console.log(i);                          // Пример цикла for       
}

for (let i = 1; i < 10; i++) {
        if (i === 6) {
           break;
        }                                        // Пример цикла for если нужно чтобы цикл прервался.
        console.log(i);
}


for (let i = 1; i < 10; i++) {
        if (i === 6) {
           continue;
        }                      // Пример цикла for с оператором continue который убирает ненужный шаг и продолжает цикл
        console.log(i);
}