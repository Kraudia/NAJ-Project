import { Component, Input, Output, EventEmitter } from '@angular/core';
import { movieFilm } from './movie.model';

@Component({
    selector: 'myMovie',
    templateUrl: 'app/movieList/movie.component.html'
})
export class MovieComponent {
    @Input() public movieFilm: movieFilm;

    @Output() addmovieFilmOrder : EventEmitter<movieFilm> =
        new EventEmitter<movieFilm>();


    addFilmOrder () {
        this.addmovieFilmOrder.emit(this.movieFilm);
    }
}
