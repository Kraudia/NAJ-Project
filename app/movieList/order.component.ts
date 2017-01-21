import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderedMovieFilm } from './order.model';

@Component({
    selector: 'myOrder',
    templateUrl: 'app/movieList/order.component.html'
})

export class OrderComponent {
    @Input() public orderedMovieFilm: OrderedMovieFilm;

    @Output() orderMovieFilm : EventEmitter<OrderedMovieFilm> =
        new EventEmitter<OrderedMovieFilm>();

    removeFilmOrder () {
        this.removeMovieFilmOrder.emit(this.todoTask);
    }
}
