import { Component, OnInit } from '@angular/core';
import { MovieFilm } from './movie.model';
import { MovieService } from './movieList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'myMovieList',
    templateUrl: 'app/movieList/movieList.component.html'
})
export class MovieListComponent implements OnInit {

    public movies:Array<MovieFilm> = [];
    public order:Array<MovieFilm> = [];

    public newMovieFilmName: string;

    constructor(private movieService: MovieService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit () {
        this.movieService.getMovies1().subscribe(
                b => this.movies = b
            );
    }

    addChildOrder (filmToAddOrder: MovieFilm) {
        this.order.push(filmToAddOrder);
    }


}
