import { Component, OnInit } from '@angular/core';
import { MovieFilm } from './movie.model';
import { OrderedMovieFilm } from './orderedMovie.model';
import { MovieService } from './movieList.service';
import { OrderService } from './../order/order.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesAll } from './categories.model';

@Component({
    selector: 'myMovieList',
    templateUrl: 'app/movieList/movieList.component.html'
})
export class MovieListComponent implements OnInit {

    public movies: Array<MovieFilm>;
    public categoriesAll: CategoriesAll = {};
    public newMovieFilmName: string;
    public message: string = '';
    public total: number;

    constructor(private movieService: MovieService,
        private activatedRoute: ActivatedRoute, 
        private orderService: OrderService) {
            this.total = this.orderService.total;
    }

    ngOnInit () {
        this.activatedRoute.params.subscribe(() => {
            this.movieService.getCategories().subscribe(
                data => {
                    this.categoriesAll = data;
                }
            );
        });

        this.activatedRoute.params.subscribe((param) => {
            this.movieService.getMovies(param.priority).subscribe(
                data => {
                    this.movies = data;
                }
            );
        });
    }

    addChildOrder(filmToAddOrder: MovieFilm) {
        if (filmToAddOrder.copiesLeft > 0) {
            let index: number = this.movies.indexOf(filmToAddOrder);
            filmToAddOrder.copiesLeft = filmToAddOrder.copiesLeft - 1;
            this.message = "Movie is added to Your basket!";
            if (filmToAddOrder.copiesLeft === 0) {
                filmToAddOrder.isAvailable = false;
            }
            this.orderService.addToOrderedMovies(filmToAddOrder);
        } else {
            this.message = "Sorry, movie is not available now!";
        }
        this.total = this.orderService.total;
    }

    removeChildOrder (filmToRemoveOrder: MovieFilm) {
        if (filmToRemoveOrder.isAvailable === false) {
            filmToRemoveOrder.isAvailable = true;
        }
        this.message = 'Movie is removed from your basket!';
        filmToRemoveOrder.copiesLeft = filmToRemoveOrder.copiesLeft + 1;
        this.orderService.removeFromOrderedMovies(filmToRemoveOrder);
        this.total = this.orderService.total;
    }
}
