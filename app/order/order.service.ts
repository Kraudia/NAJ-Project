import { Injectable } from '@angular/core';
import { MovieFilm } from './../movieList/movie.model';

@Injectable()
export class OrderService {

    public order: Array<MovieFilm> = [];

    addToOrderedMovies(movie: MovieFilm) {
      this.order.push(movie);  
      console.log("AAAA addToOrderedMovies");  
      console.log(movie); 
    }

    removeFromOrderedMovies(movie: MovieFilm){
      this.order.splice(this.order.indexOf(movie),1);
      console.log("RRRR removeFromOrderedMovies");  
      console.log(movie); 
    }

}