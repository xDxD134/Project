"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }

    },
    rememberMyFilms: function () {
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
    // writeYourGenres: function () {
    //     for (let i = 1; i <= 3; i++) {
    //         const genre = prompt(`Ваш любимый жанр под номером ${i}`);

    //         if (genre == '' || genre == null) {

    //             console.log("Вы ввели некоректные данные или не ввели вовсе");
    //             i--;
    //         } else {
    //             personalMovieDB.genres[i - 1] = genre;
    //         }

    //         personalMovieDB.genres.forEach(function (item, i) {
    //             console.log(`Любимый жанр ${i + 1} - это ${item}`);
    //         });
    //     }
    // },

    // Метод writeYourGenres можно записать по другому с помощью метода split

    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            const genres = prompt(`Введите люимые жанры через запятую`).toLowerCase(); // использовать метод для корректной сортировки
            if (genres == '' || genres == null) {

                console.log("Вы ввели некоректные данные или не ввели вовсе");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort(); // Сортировка по алфавиту. Необязательно 
            }

            personalMovieDB.genres.forEach(function (item, i) {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat != true) {
            personalMovieDB.privat = true;


        } else {
            personalMovieDB.privat = false;
        }
    },
};


personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);