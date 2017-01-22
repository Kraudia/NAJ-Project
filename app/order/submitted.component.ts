import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Borrow } from './borrow.model';
import { OrderService } from './order.service';
import { BorrowService } from './borrow.service';
import { Order } from './order.model';

@Component({
  selector: 'order-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ order.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Surname</div>
      <div class="col-xs-9 pull-left">{{ order.surname }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Phone</div>
      <div class="col-xs-9 pull-left">{{ order.phone }}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
    <button class="btn btn-default" (click)="onClickConfirm()">Confirm</button>
  </div>`
})

export class SubmittedComponent {
  @Input()  order: Order;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();

  constructor(private borrowService: BorrowService,
    private orderService : OrderService) {
  }

  onClick() {
    this.submittedChange.emit(false);
  }

  onClickConfirm() { 

    let orderedMoviesIds: Array<number> = [];

    this.orderService.order.forEach((element) => {
      orderedMoviesIds.push(element.id);
    });

    var borrow: Borrow = {
      form: {
        firstName: this.order.name,
        lastName: this.order.surname,
        phone:  this.order.phone
      },
      movieIds: orderedMoviesIds
    }
    console.log(borrow);
    console.log(JSON.stringify(borrow));
    this.borrowService.borrowMovies(borrow).subscribe(
      data => console.log(data));
  }
}