import { Component, OnInit } from '@angular/core';
import { TodoTask } from './todo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-todo-list',
    templateUrl: 'app/order-list/order-list.component.html'
})
export class OrderListComponent implements OnInit {

    public order:Array<TodoTask> = [];

    public newTodoTaskName: string;

    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit () {
    }

    removeChildOrder (taskToRemoveOrder: TodoTask) {
        let index: number = this.order.indexOf(taskToRemoveOrder);
        this.order.splice(index, 1);
    }


}
