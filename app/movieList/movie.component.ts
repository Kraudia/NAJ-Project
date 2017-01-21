import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieFilm } from './movie.model';

@Component({
    selector: 'myMovie',
    templateUrl: 'app/movieList/movie.component.html'
})
export class MovieComponent {
    @Input() public movieFilm: MovieFilm;

    @Output() orderMovieFilm : EventEmitter<MovieFilm> =
        new EventEmitter<MovieFilm>();

    addFilmOrder () {
        this.orderMovieFilm.emit(this.movieFilm);
    }
}
