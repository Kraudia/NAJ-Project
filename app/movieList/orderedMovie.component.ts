import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderedMovieFilm } from './orderedMovie.model';

@Component({
    selector: 'myOrderedMovie',
    templateUrl: 'app/movieList/orderedMovie.component.html'
})

export class OrderedMovieComponent {
    @Input() public orderedMovieFilm: OrderedMovieFilm;

    @Output() removeMovieFilmOrder : EventEmitter<OrderedMovieFilm> =
        new EventEmitter<OrderedMovieFilm>();

    removeFilmOrder () {
        this.removeMovieFilmOrder.emit(this.orderedMovieFilm);
    }
}
