import { Injectable } from '@angular/core';
import { MovieFilm } from './../movieList/movie.model';

@Injectable()
export class OrderService {

    public order: Array<MovieFilm> = [];
    public total: number = 0;

    sumTotalFee() {
        this.total = 0;
        if (this.order.length > 0) {
            this.order.forEach((element) => {
                this.total = this.total + element.fee;
            });
        }
    }

    addToOrderedMovies(movie: MovieFilm) {
      this.order.push(movie);  
      this.sumTotalFee();
    }

    removeFromOrderedMovies(movie: MovieFilm){
      this.order.splice(this.order.indexOf(movie),1);
      this.sumTotalFee();
    }
}