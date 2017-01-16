import { Injectable } from '@angular/core';
import { TodoTask } from './todo.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    constructor(private http: Http) {
    }

    getTodos (categoryId: string) : Observable<TodoTask[]> {
        if (categoryId) {
          return this.http.get('api/movies'+categoryId).res.json();
          } || { };
        } else {
            return this.http.get('api/movies').res.json() || { };
        }
  }
}
