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
        return this.http.get('app/todo-list/todoList.json')
            .map((res) => this.extractData(res, categoryId));
    }

    private extractData(res: Response, categoryId: string) {
        let body = res.json();
        if (categoryId) {
          for (var i=0; i<todo.length; i++){
            for (var j=0; i<todo[i].categoryIds.length; j++){
              if (todo[i].categoryIds[j] === categoryId){
                return todos[i];
              }
            }
          } || { };
        } else {
            return body.data || { };
        }
  }
}
