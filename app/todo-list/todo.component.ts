import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoTask } from './todo.model';

@Component({
    selector: 'my-todo',
    templateUrl: 'app/todo-list/todo.component.html'
})
export class TodoComponent {
    @Input() public todoTask: TodoTask;

    @Output() addTodoTaskOrder : EventEmitter<TodoTask> =
        new EventEmitter<TodoTask>();


    addTaskOrder () {
        this.addTodoTaskOrder.emit(this.todoTask);
    }
}
