"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("Насолько оцените его?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    }
}
// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB.count <= 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;

        // Можно задать вопрос в самом массиве
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

// function writeYourGenres() {
//     personalMovieDB.genres = [];
//     personalMovieDB.genres[0] = prompt('Ваш любимый жанр под номером', "");
//     personalMovieDB.genres[1] = prompt('Ваш любимый жанр под номером', "");
//     personalMovieDB.genres[2] = prompt('Ваш любимый жанр под номером', "");
//     console.log(`Ваш любимый жанр под номером ${personalMovieDB.genres}`);
// }
// writeYourGenres();
// console.log(personalMovieDB.genres);


// for (let i = 0; i < 3; i++) {
//     const numberYourGenres = prompt("Ваш любимый жанр под номером", "");
//     personalMovieDB.genres[0] = numberYourGenres;
//     personalMovieDB.genres[1] = numberYourGenres;
//     personalMovieDB.genres[2] = numberYourGenres;
//     console.log(`Ваш любимый жанр под номером ${numberYourGenres}`);
// }
// console.log(personalMovieDB.genres);

//Использование цикла do while
// let i = 0;
// do {
//      const  a = prompt("Один из последних просмотренных фильмов", ""),
//             b = prompt("Насколько оцените его?", "");
//             i++;
//      if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//           personalMovieDB.movies[a] = b;
//           console.log("done");

//      } else {
//           console.log("Error");
//           i--;
//      }

// } 
// while (i < 2); 

// console.log(personalMovieDB);
// Использование цикла while
// let i = 0;
// while (i < 2) {
//      const  a = prompt("Один из последних просмотренных фильмов", ""),
//             b = prompt("Насколько оцените его?", "");
//             i++;
//      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//      } else {
//           console.log("Error");
//           i--;
//      }
// }
// console.log(personalMovieDB);