import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieFilm } from './movie.model';

@Component({
    selector: 'myOrderedMovie',
    templateUrl: 'app/movieList/orderedMovie.component.html'
})

export class OrderedMovieComponent {
    @Input() public orderedMovieFilm: MovieFilm;

    @Output() removeMovieFilmOrder : EventEmitter<MovieFilm> =
        new EventEmitter<MovieFilm>();

    removeFilmOrder () {
        this.removeMovieFilmOrder.emit(this.orderedMovieFilm);
    }
}
