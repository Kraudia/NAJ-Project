import { Component, OnInit } from '@angular/core';
import { TodoTask } from './todo.model';
import { TodoService } from './todoList.service';
import { ActivatedRoute } from '@angular/router';
import { OrderListComponent } from './order-list.component.ts'

@Component({
    selector: 'my-todo-list',
    templateUrl: 'app/todo-list/todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    public todos:Array<TodoTask> = [];

    public newTodoTaskName: string;

    constructor(private todoService: TodoService,
        private activatedRoute: ActivatedRoute, private orderListComponent: OrderListComponent) {

    }

    ngOnInit () {
        this.activatedRoute.params.subscribe((param) => {
            this.todoService.getTodos(param.categoryId).subscribe(
                b => this.todos = b
            );
        });
    }

    addChildOrder (taskToAddOrder: TodoTask) {
        this.orderListComponent.order.push(newTask);
    }


}
