import { Injectable } from '@angular/core';
import { MovieFilm } from './movie.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

    constructor(private http: Http) {
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

    private extractData(res: Response) {
      let body = res.json();
      console.log(res.json());
      if (categoryId) {
          return res.json();
      } else {
          return res.json();
      }
      return getted.res.json() || { };
    }

    getMovies1 () : Observable<MovieFilm[]> {
        return this.http.get('/api/movies')
            .map((res) => res.json());
    }


}
