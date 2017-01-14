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
    public todosOrder:Array<TodoTask> = [];

    public newTodoTaskName: string;

    constructor(private todoService: TodoService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit () {
        this.activatedRoute.params.subscribe((param) => {
            this.todoService.getTodos(param.categoryId).subscribe(
                data => this.todos = data
            );
        });
    }

    addChild (taskToAdd: TodoTask) {
        this.todosOrder.push(TodoTask);
    }

    removeChild (taskToRemove: TodoTask) {
        let index: number = this.todos.indexOf(taskToRemove);
        this.todos.splice(index, 1);
    }
}
