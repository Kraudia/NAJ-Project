import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoTask } from './todo.model';

@Component({
    selector: 'my-todo',
    templateUrl: 'app/todo-list/todo.component.html'
})
export class TodoComponent {
    @Input() public todoTask: TodoTask;

    @Output() removeTodoTask : EventEmitter<TodoTask> =
        new EventEmitter<TodoTask>();

    @Output() addTodoTask : EventEmitter<TodoTask> =
        new EventEmitter<TodoTask>();

    removeTask () {
        this.removeTodoTask.emit(this.todoTask);
    }
    addTask () {
        this.addTodoTask.emit(this.todoTask);
    }
}
