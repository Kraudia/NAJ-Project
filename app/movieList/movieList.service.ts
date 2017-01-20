import { Injectable } from '@angular/core';
import { MovieFilm } from './movie.model';
import { CategoriesAll } from './categories.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

    constructor(private http: Http) {
    }

    getCategories () : Observable<CategoriesAll> {
        return this.http.get('/api/categories')
            .map((res) => res.json());
    }

    getMovies (categoryId: string) : Observable<MovieFilm[]> {
        if (categoryId) {
          return this.http.get('/api/movies/'+categoryId)
              .map((res) => res.json());
        } else {
            return this.http.get('/api/movies')
                .map((res) => res.json());
        }
    }


}
