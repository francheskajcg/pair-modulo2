'use strict'

const workWithMovies = () => {
    const movies = [
        'Piratas del Caribe',
        'Blancanieves',
        'Encanto',
    ];
    movies [3] = 'Titanic';
    movies [1] = 'Vaiana';

    console.table(movies);
};

workWithMovies();