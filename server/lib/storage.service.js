const _ = require('lodash');

const borrowedCountDict = {},
      movies = parseMovieList(require('./../data/movies.json')),
      categories = require('./../data/categories.json');

module.exports = {
    getAllMovies: function() {
        return mapMovies(movies);
    },
    getCategoriesDictionary: function() {
        return categories;
    },
    getMoviesFrom: function(categoryId) {
        const applicable =  _.filter(movies, movie => _.includes(movie.categoryIds, categoryId));
        return mapMovies(applicable);
    },
    borrow: function(movieIds) {
        return _.every(movieIds, movieId => {
            if (!movies[movieId] || movies[movieId].count === borrowedCountDict[movieId]) {
                return false;
            }
            borrowedCountDict[movieId] = (borrowedCountDict[movieId] || 0) + 1;
            return true;
        });
    }
};

function parseMovieList(rawMovies) {
    return _.reduce(rawMovies, (result, movie, key) => {
        result[key+1] = _.assign({}, movie, { id: key + 1 });
        return result;
    }, {});
}

function mapMovies(movies) {
    return _.map(movies, movie => {
        var borrowedCount = borrowedCountDict[movie.id] || 0;
        return {
            id: movie.id,
            name: movie.name,
            categoryIds: movie.categoryIds,
            isAvailable: movie.count > borrowedCount,
            copiesLeft: movie.count - borrowedCount
        };
    });
}
