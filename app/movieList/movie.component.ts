import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieFilm } from './movie.model';

@Component({
    selector: 'myMovie',
    templateUrl: 'app/movieList/movie.component.html'
})
export class MovieComponent {
    @Input() public movieFilm: MovieFilm;

    @Output() addmovieFilmOrder : EventEmitter<MovieFilm> =
        new EventEmitter<MovieFilm>();


    addFilmOrder () {
        this.addmovieFilmOrder.emit(this.movieFilm);
    }
}
