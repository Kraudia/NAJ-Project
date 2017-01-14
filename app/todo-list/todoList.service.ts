import { Injectable } from '@angular/core';
import { TodoTask } from './todo.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    constructor(private http: Http) {
    }

    getTodos (priority: string) : Observable<TodoTask[]> {
        return this.http.get('app/todo-list/todoList.json')
            .map((res) => this.extractData(res, priority));
    }

    private extractData(res: Response, priority: string) {
        let body = res.json();
        if (priority) {
            return body.data.filter((todo) => {
                return todo.priority === priority;
            }) || { };
        } else {
            return body.data || { };
        }
  }
}