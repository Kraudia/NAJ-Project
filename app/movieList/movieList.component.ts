import { Component, OnInit } from '@angular/core';
import { MovieFilm } from './movie.model';
import { MovieService } from './movieList.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesAll } from './categories.model';

@Component({
    selector: 'myMovieList',
    templateUrl: 'app/movieList/movieList.component.html'
})
export class MovieListComponent implements OnInit {

    public movies: Array<MovieFilm> = [];
    public order: Array<MovieFilm> = [];
    public categoriesAll: CategoriesAll = {};

    public newMovieFilmName: string;

    constructor(private movieService: MovieService,
        private activatedRoute: ActivatedRoute) {


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

    addChildOrder (filmToAddOrder: MovieFilm) {
        this.order.push(filmToAddOrder);
    }
}
