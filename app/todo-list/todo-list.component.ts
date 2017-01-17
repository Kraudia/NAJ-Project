import { Component, OnInit } from '@angular/core';
import { TodoTask } from './todo.model';
import { TodoService } from './todoList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-todo-list',
    templateUrl: 'app/todo-list/todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    public todos:Array<TodoTask> = [];
    public order:Array<TodoTask> = [];

    public newTodoTaskName: string;

    constructor(private todoService: TodoService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit () {
        this.activatedRoute.params.subscribe((param) => {
            this.todoService.getTodos(param.categoryId).subscribe(
                b => this.todos = b
            );
        });
        this.todoService.getTodos1().subscribe(
            data => this.order = data
        );
    }

    addChildOrder (taskToAddOrder: TodoTask) {
        this.order.push(taskToAddOrder);
    }


}
