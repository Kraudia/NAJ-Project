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
    <button class="btn btn-success" (click)="onClickConfirm()">Confirm</button>
    <div *ngIf="this.borrowService.message" class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
    </div>
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
        phone: parseInt(this.order.phone, 10)
      },
      movieIds: orderedMoviesIds
    }

    this.borrowService.borrowMovies(borrow).subscribe(
      borrow => {
        console.log(borrow));
      }
  }
}