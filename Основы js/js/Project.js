"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов", ""),
                b = prompt("Насколько оцените его?", "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count >= 1 && personalMovieDB.count <= 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
                console.log("Вы ввели некорректное значение или не ввели вовсе");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};








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