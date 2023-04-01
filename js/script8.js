"use strist";

if (4 == 9) {                   // пример условия. В консоле ничего не будет выводиться, т.к. условие неверное 
  console.log("Ok");
}   

if (9 == 9) {                   // условия верное в консоле выведется ОК
  console.log("Ok");
}

if (4 == 9) {
    console.log('Ok!');
} else {                        // пример else. Else используется для того чтобы произошло дествие при неверном условии 
    console.log('Error');
}

                                    // УСЛОВИЯ БЫВАЕТ МНОГО

const num = 50;

if (num < 49) {
   console.log('Error');
} else if (num > 100) {
   console.log ('Много');
} else {
   console.log("Ok!");
}

                                    // СИНТАКСИС ЗАПИСИ УСЛОВИЙ ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР

const Num = 50;

(Num == 50) ? console.log("Ok!") : console.log("Error");

                                    // ПРИМЕР Конструкции switch 

const Numb = 50;

switch (Numb) {
    case 49:
        console.log("Неверно");
        break;
    case 100:
        console.log("Много");
        break;
    case 50:
        console.log("В точку");
        break;
    default:                                // Default будет работать если ни один из кейсов неверный
        console.log("Не в этот раз");
        break;
}



