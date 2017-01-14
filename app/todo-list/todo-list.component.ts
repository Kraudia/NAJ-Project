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

    public newTodoTaskName: string;

    constructor(private todoService: TodoService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit () {
        this.activatedRoute.params.subscribe((param) => {
            this.todoService.getTodos(param.priority).subscribe(
                data => this.todos = data
            );
        });
    }

    addNewTask () {
        let newTask: TodoTask = {
            name: this.newTodoTaskName,
            isDone: false,
            priority: 'low'
        };

        this.todos.push(newTask);
    }

    removeChild (taskToRemove: TodoTask) {
        let index: number = this.todos.indexOf(taskToRemove);
        this.todos.splice(index, 1);
    }
} 