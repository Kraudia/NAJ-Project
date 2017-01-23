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

    public movies: Array<MovieFilm> = [];
    public categoriesAll: CategoriesAll = {};
    public newMovieFilmName: string;
    public message: string = '';
    public total: number;

    constructor(private movieService: MovieService,
        private activatedRoute: ActivatedRoute, 
        private orderService: OrderService) {
    }

    ngOnInit () {
        this.total = this.orderService.total;

        this.activatedRoute.params.subscribe(() => {
            this.movieService.getCategories().subscribe(
                data => {
                    this.categoriesAll = data;
                    this.updateCopies();
                }
            );
        });

        this.activatedRoute.params.subscribe((param) => {
            this.movieService.getMovies(param.priority).subscribe(
                data => {
                    this.movies = data;
                    this.updateCopies();
                }
            );
        });
    }

    updateCopies() {
        this.orderService.order.forEach((element) => {
            let oneMovie = this.movies.filter((movie) => {
                return movie.id === element.id;
            });

            oneMovie = oneMovie[0];

            if (oneMovie) {
                    let index: number = this.movies.indexOf(oneMovie);
                    this.movies[index].copiesLeft -= 1;
                    if (this.movies[index].copiesLeft === 0) {
                        this.movies[index].isAvailable = false;
                    }

                    if (this.movies[index].copiesLeft < 0) {
                        this.removeChildOrder(oneMovie);
                    }
            }
        });
    }

    addChildOrder(filmToAddOrder: MovieFilm) {
        if (filmToAddOrder.copiesLeft > 0) {
            filmToAddOrder.copiesLeft = filmToAddOrder.copiesLeft - 1;
            if (filmToAddOrder.copiesLeft === 0) {
                filmToAddOrder.isAvailable = false;
            }
            this.message = "Movie " + filmToAddOrder.name + " is added to Your basket!";
            this.orderService.addToOrderedMovies(filmToAddOrder);
        } else {
            this.message = "Sorry, movie is not available now!";
        }
        this.total = this.orderService.total;
    }

    removeChildOrder (filmToRemoveOrder: MovieFilm) {
        let oneMovie = this.movies.filter((movie) => {
                return movie.id === filmToRemoveOrder.id;
            });

        oneMovie = oneMovie[0];

        if(oneMovie) {
            let index: number = this.movies.indexOf(oneMovie);
            this.movies[index].copiesLeft += 1;
            if (this.movies[index].isAvailable === false) {
                this.movies[index].isAvailable = true;
            }
        }
        this.message = 'Movie is removed from your basket!';
        this.orderService.removeFromOrderedMovies(filmToRemoveOrder);
        this.total = this.orderService.total;
    }
}
